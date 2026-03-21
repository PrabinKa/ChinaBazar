import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { colors, radius } from '../../../theme';
import { rf, spacing } from '../../../utils';
import { ProductCard, SectionHeader } from '../../../components';
import { Product } from '../../../constants/data/products';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.38;
const IMAGE_HEIGHT = CARD_WIDTH * 0.8;

interface TodaysDealsProps {
  products?: Product[];
}

const TodaysDeals: React.FC<TodaysDealsProps> = ({ products = [] }) => {

  return (
    <View style={styles.container}>
      <SectionHeader
        title="Today's Deal"
        onViewAllPress={() => {}}
        containerStyle={styles.header}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {products.map(product => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing(16),
  },
  header: {
    marginBottom: spacing(16),
    paddingHorizontal: spacing(16),
  },
  headerContainer: {
    paddingHorizontal: spacing(16),
    marginBottom: spacing(12),
  },
  headerTitle: {
    fontSize: rf(18),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  scrollContent: {
    paddingHorizontal: spacing(16),
    gap: spacing(12),
  },
  cardContainer: {
    width: CARD_WIDTH,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginRight: spacing(12),
  },
  imageContainer: {
    position: 'relative',
    width: CARD_WIDTH,
    height: IMAGE_HEIGHT,
    backgroundColor: colors.surfaceVariant,
  },
  badgeContainer: {
    position: 'absolute',
    left: spacing(10),
    top: spacing(7),
    flexDirection: 'row',
  },
  badgeStyles: {
    paddingHorizontal: spacing(8),
    paddingVertical: spacing(4),
    borderRadius: radius.sm,
    zIndex: 1,
  },
  badgeText: {
    color: colors.background,
    fontSize: rf(10),
    fontWeight: '700',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productInfo: {
    padding: spacing(10),
  },
  productName: {
    fontSize: rf(13),
    fontWeight: '600',
    color: '#000000',
    marginBottom: spacing(6),
    lineHeight: rf(18),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing(6),
    flexWrap: 'wrap',
  },
  newPrice: {
    fontSize: rf(14),
    fontWeight: '700',
    color: colors.primary,
    marginRight: spacing(6),
  },
  originalPrice: {
    fontSize: rf(12),
    color: colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: rf(11),
    color: colors.textSecondary,
  },
});

export default TodaysDeals;
