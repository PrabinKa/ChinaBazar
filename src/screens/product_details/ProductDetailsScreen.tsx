import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme';
import { Header } from '../../components';
import { AppStackNavigationProp } from '../../types/navigation';

interface ProductDetailsScreenProps {
  navigation: AppStackNavigationProp<'ProductDetails'>;
}

const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftIcon="chevron-back"
        rightIcon="cart-outline"
        searchMode="button"
        onSearchPressed={() => {
          navigation.navigate('Search');
        }}
        onLeftPress={() => navigation.goBack()}
        onRightPress={() => {}}
        placeholder='Search in Chinabazar'
      />
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
