import React, { useMemo, useState, useCallback } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../theme/colors';
import { AppStackNavigationProp } from '../../types/navigation';
import { PRODUCTS, Product } from '../../constants/data/products';
import useProductDetailsSections from './hooks/useProductDetailsSections';

interface ProductDetailsScreenProps {
  navigation: AppStackNavigationProp<'ProductDetails'>;
  route: any;
}

const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedStorageIndex, setSelectedStorageIndex] = useState(0);

  const product: Product | null = useMemo(() => {
    const productId = route?.params?.productId;
    return PRODUCTS.find(p => p.id === productId) || null;
  }, [route.params?.productId]);

  const handleColorSelect = useCallback((index: number) => {
    setSelectedColorIndex(index);
  }, []);

  const handleStorageSelect = useCallback((index: number) => {
    setSelectedStorageIndex(index);
  }, []);

  const { sections, renderSectionItem, keyExtractor } = useProductDetailsSections({
    product,
    selectedColorIndex,
    selectedStorageIndex,
    onColorSelect: handleColorSelect,
    onStorageSelect: handleStorageSelect,
    navigation,
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sections}
        renderItem={renderSectionItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View style={{ height: 0 }} />}
        ListFooterComponent={<View style={{ height: 20 }} />}
      />
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
