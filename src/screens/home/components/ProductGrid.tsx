import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Product } from '../../../constants/data/products';
import { ProductCard } from '../../../components/product_card/ProductCard';
import { spacing } from '../../../utils';
import { colors } from '../../../theme';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const renderProductItem = ({ item }: { item: Product }) => (
    <View style={styles.itemContainer}>
      <ProductCard product={item} />
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderProductItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    gap: spacing(12),
  },
  contentContainer: {
    paddingHorizontal: spacing(16),
    gap: spacing(12),
    paddingBottom: spacing(100),
    backgroundColor: colors.background,
    
  },
  itemContainer: {
    flex: 1,
    minWidth: '45%',
    alignItems: 'center'
  },
});