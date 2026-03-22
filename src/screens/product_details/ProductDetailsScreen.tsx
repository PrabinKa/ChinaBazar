import React, { useMemo, useState, useCallback } from 'react';
import { StyleSheet, FlatList, View, Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../theme/colors';
import { AppStackNavigationProp } from '../../types/navigation';
import { PRODUCTS, Product } from '../../constants/data/products';
import { spacing } from '../../utils/responsive';
import useProductDetailsSections from './hooks/useProductDetailsSections';
import ActionButtonBar from './components/ActionButtonBar';

interface ProductDetailsScreenProps {
  navigation: AppStackNavigationProp<'ProductDetails'>;
  route: any;
}

const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const insets = useSafeAreaInsets();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedStorageIndex, setSelectedStorageIndex] = useState(0);

  // Calculate bottom padding to prevent content from being hidden behind ActionButtonBar
  const actionBarHeight = spacing(12) + spacing(14) * 2 + spacing(16) + Math.max(spacing(16), insets.bottom);

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

  const handleAddToCart = useCallback(() => {
    console.log('Add to Cart pressed');
  }, []);

  const handleBuyNow = useCallback(() => {
    console.log('Buy Now pressed');
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}
      >
        <FlatList
          data={sections}
          renderItem={renderSectionItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: actionBarHeight + spacing(20),
          }}
          ListHeaderComponent={<View style={{ height: 0 }} />}
        />
        <ActionButtonBar
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  keyboardAvoid: {
    flex: 1,
  },
});
