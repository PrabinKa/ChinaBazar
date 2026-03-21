import React, { useState, useCallback, useMemo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Header } from '../../components';
import { ProductCard } from '../../components/product_card/ProductCard';
import { PRODUCTS, Product } from '../../constants/data/products';
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
import { IconName } from '../../types/icon';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_MARGIN = spacing(10);
const HORIZONTAL_PADDING = spacing(15);
const COLUMN_WIDTH = (SCREEN_WIDTH - HORIZONTAL_PADDING * 2 - CARD_MARGIN) / 2;

interface SearchScreenProps {
  navigation: AppStackNavigationProp<'Search'>;
}

const AnimatedChip = ({ item, index, onPress }: { item: SearchHistoryItem; index: number; onPress: () => void }) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 80)}
      layout={Layout.springify()}
      style={styles.chip}
    >
      <Pressable onPress={onPress} style={styles.chipPressable}>
        <Text style={styles.chipText}>{item.query}</Text>
      </Pressable>
    </Animated.View>
  );
};

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(state => state.searchHistory.history);

  // Filter products based on search text
  const searchResults = useMemo(() => {
    if (!searchText.trim()) {
      return [];
    }
    const query = searchText.toLowerCase().trim();
    return PRODUCTS.filter(
      product =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query),
    );
  }, [searchText]);

  const handleSearch = useCallback(() => {
    const trimmedText = searchText.trim();
    if (trimmedText) {
      dispatch(addSearchQuery(trimmedText));
      setHasSearched(true);
    }
  }, [dispatch, searchText]);

  const handleSearchChange = useCallback((text: string) => {
    setSearchText(text);
    // Only clear search results when text is empty, don't trigger search
    if (!text.trim()) {
      setHasSearched(false);
    }
  }, []);

  // Search is only triggered when search button is clicked
  const handleHistoryItemPress = useCallback((item: SearchHistoryItem) => {
    setSearchText(item.query);
    // Trigger search with the selected history item
    const trimmedText = item.query.trim();
    if (trimmedText) {
      dispatch(addSearchQuery(trimmedText));
      setHasSearched(true);
    }
  }, [dispatch]);

  const handleClearHistory = useCallback(() => {
    dispatch(clearSearchHistory());
  }, [dispatch]);

  const renderHistoryItem = ({ item, index }: { item: SearchHistoryItem; index: number }) => {
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
      <View style={styles.emptyIconContainer}>
        <Ionicons name="search-outline" size={40} color={colors.textSecondary} />
      </View>
      <Text style={styles.emptyTitle}>No search history yet</Text>
      <Text style={styles.emptySubtext}>
        Your recent searches will appear here
      </Text>
    </View>
  );

  const renderNoResults = () => (
    <View style={[styles.emptyContainer, layout.center]}>
      <View style={styles.emptyIconContainer}>
        <Ionicons name="search-outline" size={40} color={colors.textSecondary} />
      </View>
      <Text style={styles.emptyTitle}>No products found</Text>
      <Text style={styles.emptySubtext}>
        Try searching with different keywords
      </Text>
    </View>
  );

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

  const renderSearchResults = () => {
    if (!hasSearched) return null;

    if (searchResults.length === 0) {
      return renderNoResults();
    }

    const FilterButton = ({ icon, label, rightIcon }: { icon?: IconName; label: string; rightIcon?: IconName }) => (
      <TouchableOpacity style={styles.filterButton} activeOpacity={0.7}>
        {icon && (
          <Ionicons name={icon} size={16} color={colors.textSecondary} />
        )}

        <Text style={styles.filterText}>{label}</Text>

        {rightIcon && (
          <Ionicons name={rightIcon} size={16} color={colors.textSecondary} />
        )}
      </TouchableOpacity>
    );

    const renderHeaderComponent = () => (
      <View style={styles.headerContainer}>
        <FilterButton icon="filter" label="Filter" />
        <FilterButton icon="swap-vertical" label="Sort By" />
        <FilterButton label="Category" rightIcon="chevron-down" />
        <FilterButton label="Top Sales" />
      </View>
    );

    return (
      <FlatList
        data={searchResults}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeaderComponent}
      />
    );
  };

  // Show search results when user has searched and there's a query
  const showSearchResults = hasSearched && searchText.trim().length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftIcon="chevron-back"
        rightIcon="cart-outline"
        onLeftPress={() => navigation.goBack()}
        searchValue={searchText}
        onSearchChangeText={handleSearchChange}
        onSearchSubmit={handleSearch}
      />

      {showSearchResults ? (
        renderSearchResults()
      ) : (
        <View style={styles.historySection}>
          {searchHistory.length > 0 && (
            <View style={[styles.historyHeader, layout.spaceBetweenRow]}>
              <View style={styles.historyTitleContainer}>
                <Text style={styles.historyTitle}>Search History</Text>
              </View>
              <Pressable
                style={[styles.clearButton, layout.centerRow]}
                onPress={handleClearHistory}
              >
                <Text style={styles.clearText}>Clear All</Text>
                <Ionicons
                  name="trash-outline"
                  size={16}
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
            columnWrapperStyle={styles.historyRow}
            contentContainerStyle={styles.historyListContent}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={renderEmptyHistory}
          />
        </View>
      )}
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
    marginTop: spacing(8),
  },
  historyHeader: {
    marginBottom: spacing(12),
    paddingVertical: spacing(4),
  },
  historyTitleContainer: {
    ...layout.centerRow,
    gap: spacing(6),
  },
  historyTitle: {
    fontSize: rf(16),
    fontWeight: '600',
    color: colors.textPrimary,
  },
  clearButton: {
    paddingHorizontal: spacing(10),
    paddingVertical: spacing(6),
    borderRadius: radius.md,
    gap: spacing(4),
  },
  clearText: {
    fontSize: rf(13),
    color: colors.textSecondary,
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing(60),
  },
  emptyIconContainer: {
    width: rf(80),
    height: rf(80),
    borderRadius: radius.full,
    backgroundColor: colors.surfaceVariant,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing(16),
  },
  emptyTitle: {
    fontSize: rf(16),
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing(4),
  },
  emptySubtext: {
    fontSize: rf(14),
    color: colors.textSecondary,
    textAlign: 'center',
  },
  emptyListContainer: {
    flex: 1,
  },
  chip: {
    maxWidth: (SCREEN_WIDTH - spacing(15) * 2 - spacing(16)) / 3,
    marginBottom: spacing(8),
  },
  chipPressable: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceVariant,
    paddingVertical: spacing(4),
    paddingHorizontal: spacing(12),
    borderRadius: radius.md,
    gap: spacing(6),
  },
  chipText: {
    fontSize: rf(12),
    color: colors.textSecondary,
  },
  historyRow: {
    gap: spacing(8),
  },
  historyListContent: {
    paddingTop: spacing(4),
    flexGrow: 1,
  },
  productItem: {
    flex: 0.5,
  },
  headerContainer: {
    ...layout.spaceBetweenRow,
    marginBottom: spacing(12),
    gap: spacing(8),
  },
  filterButton: {
    ...layout.centerRow,
    backgroundColor: colors.surfaceVariant,
    paddingHorizontal: spacing(8),
    paddingVertical: spacing(6),
    borderRadius: radius.md,
    gap: spacing(2),
  },
  filterText: {
    fontSize: rf(12),
    color: colors.textSecondary,
  },
  columnWrapper: {
    marginBottom: CARD_MARGIN,
  },
  listContent: {
    paddingHorizontal: spacing(15),
    paddingTop: spacing(10),
    paddingBottom: spacing(20),
  },
});
