import React, { useRef } from 'react';
import { Animated, View, Dimensions, FlatList } from 'react-native';
import PaginationDots from './PaginationDots';
import { spacing } from '../../../utils';
import { radius } from '../../../theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const HORIZONTAL_PADDING = spacing(15);
const ITEM_WIDTH = SCREEN_WIDTH - HORIZONTAL_PADDING * 2;

type Props<T> = {
  data: T[];
  renderItem: ({ item }: { item: T }) => React.ReactElement;
  itemHeight?: number;
};

const BannerCarousel = <T,>({
  data,
  renderItem,
  itemHeight = 200,
}: Props<T>) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ marginTop: spacing(15) }}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + HORIZONTAL_PADDING * 2} // snap exactly one item at a time
        snapToAlignment="start"
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: HORIZONTAL_PADDING,
          gap: HORIZONTAL_PADDING * 2, // space between items
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View
            style={{
              width: ITEM_WIDTH,
              height: itemHeight,
              borderRadius: radius.md,
              overflow: 'hidden',
            }}
          >
            {renderItem({ item })}
          </View>
        )}
      />
      <PaginationDots data={data} scrollX={scrollX} />
    </View>
  );
};

export default BannerCarousel;