import React from 'react';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import { Product } from '../../../constants/data/products';
import { ProductCard } from '../../../components/product_card/ProductCard';
import { spacing } from '../../../utils';
import { colors } from '../../../theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_MARGIN = spacing(12);
const HORIZONTAL_PADDING = spacing(16);
const COLUMN_WIDTH = (SCREEN_WIDTH - HORIZONTAL_PADDING * 2 - CARD_MARGIN) / 2;

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const renderProductItem = ({
    item,
    index,
  }: {
    item: Product;
    index: number;
  }) => {
    const isLeftColumn = index % 2 === 0;
    return (
      <View
        style={[
          styles.productItem,
          isLeftColumn
            ? { marginRight: CARD_MARGIN / 2 }
            : { marginLeft: CARD_MARGIN / 2 },
        ]}
      >
        <ProductCard product={item} cardWidth={COLUMN_WIDTH} />
      </View>
    );
  };

  return (
    <View style={{ paddingHorizontal: spacing(15) }}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flex: 0.5,
  },
  columnWrapper: {
    marginBottom: CARD_MARGIN,
  },
  contentContainer: {
    paddingTop: spacing(10),
    paddingBottom: spacing(100),
    backgroundColor: colors.background,
  },
});
