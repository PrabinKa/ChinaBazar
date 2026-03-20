import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { layout, rh, spacing } from '../../utils';
import { colors, radius } from '../../theme';

type Props = {
  placeholder?: string;
  onPress?: () => void;
};

export const SearchBar = ({
  placeholder = 'Search for products...',
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, layout.spaceBetweenRow]}
    >
      <View style={[layout.centerRow]}>
        <Ionicons
          name="search-outline"
          size={18}
          color={colors.textSecondary}
        />
        <Text style={styles.placeholder}>{placeholder}</Text>
      </View>

      <View style={[styles.button, layout.center]}>
        <Text style={styles.buttonText}>Search</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: rh(48),
    backgroundColor: colors.surfaceVariant,
    paddingLeft: spacing(12),
    paddingRight: spacing(5),
    borderRadius: radius.full,
    marginHorizontal: spacing(5),
    borderColor: colors.primary,
    borderWidth: 1.5
  },
  placeholder: {
    marginLeft: spacing(8),
    color: colors.textSecondary,
  },
  button: {
    backgroundColor: colors.primary,
    height: rh(40),
    paddingHorizontal: spacing(14),
    paddingVertical: spacing(4),
    borderRadius: radius.full,
  },
  buttonText: {
    color: colors.textOnPrimary,
    fontSize: 12,
  },
});
