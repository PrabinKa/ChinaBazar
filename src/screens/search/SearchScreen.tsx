import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Header } from '../../components';
import { colors, radius } from '../../theme';
import { AppStackNavigationProp } from '../../types/navigation';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  addSearchQuery,
  clearSearchHistory,
  SearchHistoryItem,
} from '../../store/slice/searchHistorySlice';
import { layout, rf, spacing } from '../../utils';
import Animated, { FadeInDown, Layout } from 'react-native-reanimated';

interface SearchScreenProps {
  navigation: AppStackNavigationProp<'Search'>;
}

const AnimatedChip = ({ item, index, onPress }: any) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 80)}
      layout={Layout.springify()}
      style={styles.chip}
    >
      <Pressable onPress={onPress}>
        <Text style={styles.chipText}>{item.query}</Text>
      </Pressable>
    </Animated.View>
  );
};

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(state => state.searchHistory.history);

  const handleSearch = useCallback(() => {
    const trimmedText = searchText.trim();
    if (trimmedText) {
      dispatch(addSearchQuery(trimmedText));
    }
  }, [dispatch, searchText]);

  const handleHistoryItemPress = useCallback((item: SearchHistoryItem) => {
    setSearchText(item.query);
  }, []);

  const handleClearHistory = useCallback(() => {
    dispatch(clearSearchHistory());
  }, [dispatch]);

  const renderHistoryItem = ({ item, index }: any) => {
    return (
      <AnimatedChip
        item={item}
        index={index}
        onPress={() => handleHistoryItemPress(item)}
      />
    );
  };

  const renderEmptyHistory = () => (
    <View style={[styles.emptyContainer, layout.center]}>
      <Ionicons name="search-outline" size={48} color={colors.border} />
      <Text style={styles.emptyText}>No search history</Text>
      <Text style={styles.emptySubtext}>
        Your recent searches will appear here
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftIcon="chevron-back"
        rightIcon="cart-outline"
        onLeftPress={() => navigation.goBack()}
        searchValue={searchText}
        onSearchChangeText={setSearchText}
        onSearchSubmit={handleSearch}
      />

      <View style={styles.historySection}>
        {searchHistory.length > 0 && (
          <View style={[styles.historyHeader, layout.spaceBetweenRow]}>
            <Text style={styles.historyTitle}>Search History</Text>
            <Pressable
              style={[layout.centerRow, { gap: spacing(5) }]}
              onPress={handleClearHistory}
            >
              <Text style={styles.clearText}>Clear All</Text>
              <Ionicons
                name="trash-outline"
                size={18}
                color={colors.textSecondary}
              />
            </Pressable>
          </View>
        )}

        <FlatList
          data={searchHistory}
          renderItem={renderHistoryItem}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={{ gap: spacing(8), marginBottom: spacing(8) }}
          contentContainerStyle={{ paddingTop: spacing(10) }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyHistory}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  historySection: {
    flex: 1,
    paddingHorizontal: spacing(15),
    marginVertical: spacing(12),
  },
  historyHeader: {
    marginBottom: spacing(4),
  },
  historyTitle: {
    fontSize: rf(18),
    fontWeight: '600',
    color: colors.textPrimary,
  },
  clearText: {
    fontSize: rf(14),
    color: colors.textSecondary,
    fontWeight: '500',
  },
  emptyContainer: {
    paddingTop: spacing(100),
  },
  emptyText: {
    marginTop: spacing(12),
    fontSize: rf(16),
    fontWeight: '600',
    color: colors.textPrimary,
  },
  emptySubtext: {
    marginTop: spacing(4),
    fontSize: rf(14),
    color: colors.textSecondary,
  },
  emptyListContainer: {
    flex: 1,
  },
  chip: {
    backgroundColor: colors.surfaceVariant,
    paddingVertical: spacing(8),
    paddingHorizontal: spacing(12),
    borderRadius: radius.full,
  },

  chipText: {
    fontSize: rf(13),
    color: colors.textPrimary,
  },
});
