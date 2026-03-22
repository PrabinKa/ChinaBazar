import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../../../components/button/Button';
import { rf, spacing } from '../../../utils/responsive';
import { COLORS } from '../../../theme/colors';
import { colors } from '../../../theme';
import { layout } from '../../../utils';

export interface ActionButtonBarProps {
  onAddToCart: () => void;
  onBuyNow: () => void;
  addToCartLoading?: boolean;
  buyNowLoading?: boolean;
  disabled?: boolean;
}

const ActionButtonBar: React.FC<ActionButtonBarProps> = ({
  onAddToCart,
  onBuyNow,
  addToCartLoading = false,
  buyNowLoading = false,
  disabled = false,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: Math.max(spacing(16), insets.bottom),
        },
      ]}
    >
      <View style={styles.buttonRow}>
        <Button
          title="Add to Cart"
          onPress={onAddToCart}
          variant="outlined"
          flex={1}
          borderColor={COLORS.accent}
          textColor={COLORS.accent}
          borderWidth={1.5}
          borderRadius={50}
          paddingVertical={spacing(14)}
          fontSize={rf(15)}
          fontWeight="600"
          loading={addToCartLoading}
          disabled={disabled}
        />
        <View style={styles.buttonGap} />
        <Button
          title="Buy Now"
          onPress={onBuyNow}
          variant="filled"
          flex={1}
          backgroundColor={colors.primary}
          borderRadius={50}
          paddingVertical={spacing(14)}
          fontSize={rf(15)}
          fontWeight="600"
          loading={buyNowLoading}
          disabled={disabled}
        />
      </View>
    </View>
  );
};

export default ActionButtonBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.surface,
    paddingHorizontal: spacing(16),
    paddingTop: spacing(12),
  },
  buttonRow: {
    ...layout.rowAlignCenter
  },
  buttonGap: {
    width: spacing(12),
  },
});
