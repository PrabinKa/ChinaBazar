import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, radius } from '../../../theme';
import { rf, rw, spacing } from '../../../utils';

interface ProductVariantsProps {
  colors: string[];
  storage: string[];
  selectedColorIndex: number;
  selectedStorageIndex: number;
  onColorSelect: (index: number) => void;
  onStorageSelect: (index: number) => void;
}

const ProductVariants: React.FC<ProductVariantsProps> = ({
  colors: colorOptions,
  storage,
  selectedColorIndex,
  selectedStorageIndex,
  onColorSelect,
  onStorageSelect,
}) => {
  return (
    <View style={styles.container}>
      {/* Color Selection */}
      <Text style={styles.sectionTitle}>Color</Text>
      <View style={styles.row}>
        {colorOptions.map((color, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onColorSelect(index)}
            style={[
              styles.colorCircle,
              { backgroundColor: color },
              index === selectedColorIndex && styles.selectedBorder,
            ]}
          />
        ))}
      </View>

      {/* Storage Selection */}
      <Text style={styles.sectionTitle}>Storage</Text>
      <View style={styles.rowWrap}>
        {storage.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onStorageSelect(index)}
            style={[
              styles.storageBox,
              index === selectedStorageIndex && styles.selectedStorage,
            ]}
          >
            <Text
              style={[
                styles.storageText,
                index === selectedStorageIndex && styles.selectedStorageText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ProductVariants;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing(16),
    marginTop: spacing(16),
  },
  sectionTitle: {
    marginBottom: spacing(6),
    fontWeight: '600',
    color: colors.textPrimary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing(16),
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorCircle: {
    width: rw(32),
    height: rw(32),
    borderRadius: 16,
    marginRight: spacing(10),
  },
  selectedBorder: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  storageBox: {
    paddingVertical: spacing(8),
    paddingHorizontal: spacing(12),
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.borderDark,
    marginRight: spacing(8),
    marginBottom: spacing(8),
  },
  selectedStorage: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  storageText: {
    color: colors.textPrimary,
  },
  selectedStorageText: {
    color: colors.primary,
    fontWeight: '600',
  },
});
