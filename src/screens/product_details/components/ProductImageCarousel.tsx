import React, { useRef, useMemo, useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Animated,
  Dimensions,
  Text,
} from 'react-native';
import { colors, radius } from '../../../theme';
import { spacing } from '../../../utils';
import { rf, rw } from '../../../utils';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface PaginationDotProps {
  index: number;
  scrollX: Animated.Value;
}

const PaginationDot: React.FC<PaginationDotProps> = ({ index, scrollX }) => {
  const inputRange = [
    (index - 1) * SCREEN_WIDTH,
    index * SCREEN_WIDTH,
    (index + 1) * SCREEN_WIDTH,
  ];

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.3, 1, 0.3],
    extrapolate: 'clamp',
  });

  return <Animated.View style={[styles.dot, { width: rw(8), opacity }]} />;
};

interface ProductImageCarouselProps {
  images: string[];
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({ images }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<string>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems?.length) {
      setCurrentIndex(viewableItems[0].index ?? 0);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const onScroll = useMemo(
    () =>
      Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        useNativeDriver: false,
      }),
    [scrollX],
  );

  const renderItem = useCallback(
    ({ item }: { item: string }) => (
      <View style={styles.imageContainer}>
        <Image source={{ uri: item }} style={styles.productImage} resizeMode="cover" />
      </View>
    ),
    [],
  );

  if (!images.length) {
    return (
      <View style={[styles.emptyContainer]}>
        <Text style={styles.noProductText}>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.carouselContainer}>
      <View style={styles.imageCounterContainer}>
        <Text style={styles.imageCounterText}>
          {currentIndex + 1}/{images.length}
        </Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      <View style={styles.paginationContainer}>
        {images.map((_, index) => (
          <PaginationDot key={index} index={index} scrollX={scrollX} />
        ))}
      </View>
    </View>
  );
};

export default ProductImageCarousel;

const styles = StyleSheet.create({
  carouselContainer: {
    position: 'relative',
  },
  imageContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
    backgroundColor: colors.surfaceVariant,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  imageCounterContainer: {
    position: 'absolute',
    top: spacing(10),
    right: spacing(15),
    backgroundColor: colors.overlay,
    paddingHorizontal: spacing(12),
    paddingVertical: spacing(6),
    borderRadius: radius.full,
    zIndex: 10,
  },
  imageCounterText: {
    color: colors.textOnPrimary,
    fontSize: rf(14),
    fontWeight: '600',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing(15),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  dot: {
    height: 8,
    borderRadius: 8,
    backgroundColor: colors.primary,
    marginHorizontal: spacing(4),
  },
  emptyContainer: {
    height: SCREEN_WIDTH,
    backgroundColor: colors.surfaceVariant,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noProductText: {
    fontSize: rf(16),
    color: colors.textSecondary,
  },
});
