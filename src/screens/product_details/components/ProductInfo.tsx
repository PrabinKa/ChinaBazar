import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { colors, radius } from '../../../theme';
import { layout, rf, spacing } from '../../../utils';

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  return (
    <View style={styles.starsContainer}>
      {[...Array(totalStars)].map((_, index) => {
        if (index < fullStars) {
          return (
            <Ionicons
              key={index}
              name="star"
              size={rf(14)}
              color={colors.rating}
            />
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <Ionicons
              key={index}
              name="star-half"
              size={rf(14)}
              color={colors.rating}
            />
          );
        } else {
          return (
            <Ionicons
              key={index}
              name="star-outline"
              size={rf(14)}
              color={colors.rating}
            />
          );
        }
      })}
    </View>
  );
};

interface ProductInfoProps {
  name: string;
  rating: number;
  totalReviews: number;
  price: number;
  originalPrice: number;
  discount: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  rating,
  totalReviews,
  price,
  originalPrice,
  discount,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <View style={styles.topRow}>
        <View style={styles.ratingRow}>
          <Text style={styles.ratingValue}>{rating.toFixed(1)}</Text>
          {renderStars(rating)}
          <Text style={styles.ratingText}>
            ({totalReviews.toLocaleString()})
          </Text>
        </View>

        <View style={styles.actionIcons}>
          <Ionicons
            name="heart-outline"
            size={24}
            color={colors.textSecondary}
          />
          <Ionicons
            name="cloud-upload-outline"
            size={24}
            color={colors.textSecondary}
          />
        </View>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.price}>Rs. {price.toLocaleString()}</Text>
        <Text style={styles.originalPrice}>
          Rs. {originalPrice.toLocaleString()}
        </Text>
        {discount > 0 && (
          <Text style={styles.discount}>-{discount}%</Text>
        )}
      </View>

      <View style={styles.offerBox}>
        <View style={styles.offerLeft}>
          <Ionicons
            name="pricetag-outline"
            size={20}
            color={colors.accent}
            style={{ transform: [{ scaleX: -1 }] }}
          />
          <Text style={styles.offerText}>
            NPR 1,000 OFF above orders 5k
          </Text>
        </View>

        <Ionicons
          name="chevron-forward-outline"
          size={20}
          color={colors.accent}
        />
      </View>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing(16),
    paddingTop: spacing(12),
  },
  title: {
    fontSize: rf(18),
    fontWeight: '600',
    color: colors.textPrimary,
  },
  topRow: {
    ...layout.spaceBetweenRow,
    marginTop: spacing(4),
  },
  ratingRow: {
    ...layout.rowAlignCenter,
    gap: spacing(4),
  },
  starsContainer: { 
    flexDirection: 'row', 
    marginRight: spacing(4)
  },
  ratingValue: {
    fontWeight: '500',
    color: colors.textPrimary,
  },
  ratingText: {
    color: colors.textSecondary,
  },
  actionIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing(8),
  },
  priceRow: {
    ...layout.rowAlignCenter,
    marginTop: spacing(8),
  },
  price: {
    fontSize: rf(18),
    fontWeight: '700',
    color: colors.primary,
  },
  originalPrice: {
    marginLeft: spacing(8),
    textDecorationLine: 'line-through',
    color: colors.textSecondary,
  },
  discount: {
    marginLeft: spacing(8),
    color: colors.textPrimary,
    fontWeight: '500',
  },
  offerBox: {
    ...layout.spaceBetweenRow,
    backgroundColor: colors.accentLight,
    padding: spacing(10),
    borderRadius: radius.md,
    marginTop: spacing(10),
  },
  offerLeft: {
    ...layout.rowAlignCenter,
    gap: spacing(8),
  },
  offerText: {
    color: colors.accent,
    fontWeight: '500',
  }
});
