import React from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../theme';

const { width } = Dimensions.get('window');

type Props = {
  data: any[];
  scrollX: Animated.Value;
};

const PaginationDots = ({ data, scrollX }: Props) => {
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [
          (i - 1) * width,
          i * width,
          (i + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 20, 8],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={i}
            style={[
              styles.dot,
              {
                width: dotWidth,
                opacity,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

export default PaginationDots;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginHorizontal: 4,
  },
});