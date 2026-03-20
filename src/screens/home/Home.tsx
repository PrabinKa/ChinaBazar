import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../theme/colors';
import useHomeSections from './hooks/useHomeSections';

const Home = () => {
  const { sections, renderSectionItem, keyExtractor } = useHomeSections();

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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
