import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '../../../theme';
import { rf, spacing } from '../../../utils';

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
      <Text style={styles.rating}>
        ⭐ {rating.toFixed(1)} ({totalReviews.toLocaleString()})
      </Text>
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
        <Text style={styles.offerText}>NPR 1,000 OFF above orders 5k</Text>
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
  rating: {
    marginTop: spacing(4),
    color: colors.textSecondary,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: colors.success,
  },
  offerBox: {
    backgroundColor: colors.accentLight,
    padding: spacing(10),
    borderRadius: radius.md,
    marginTop: spacing(10),
  },
  offerText: {
    color: colors.accent,
    fontWeight: '500',
  },
});
