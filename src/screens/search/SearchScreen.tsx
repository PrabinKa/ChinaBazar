import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { colors } from '../../theme';
import { AppStackNavigationProp } from '../../types/navigation';

interface SearchScreenProps {
  navigation: AppStackNavigationProp<'Search'>;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftIcon="chevron-back"
        rightIcon="cart-outline"
        onLeftPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
