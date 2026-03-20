import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { IconName } from '../../types/icon';
import { layout, rh, rw, spacing } from '../../utils';
import { colors, radius } from '../../theme';
import { SearchBar } from '../search_bar/SearchBar';

type HeaderProps = {
  leftIcon?: IconName;
  rightIcon?: IconName;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  showSearch?: boolean;
  onSearchPress?: () => void;
};

type HeaderActionButtonProps = {
  iconName: IconName;
  onPress?: () => void;
  size?: number;
  color?: string;
};

const HeaderActionButton = ({
  iconName,
  onPress,
  size = 22,
  color = colors.primary,
}: HeaderActionButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.iconButton, layout.center]}
    >
      <Ionicons name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};

export const Header = ({
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
  showSearch = true,
  onSearchPress,
}: HeaderProps) => {
  return (
    <View style={[styles.container, layout.spaceBetweenRow]}>
      
      {/* Left Icon*/}
      {leftIcon ? (
        <HeaderActionButton iconName={leftIcon} onPress={onLeftPress} />
      ) : (
        <View style={styles.placeholder} />
      )}

      {/* Search*/}
      {showSearch && <SearchBar mode='input' onPress={onSearchPress} />}

      {/* Right Icon*/}
      {rightIcon ? (
        <HeaderActionButton iconName={rightIcon} onPress={onRightPress} />
      ) : (
        <View style={styles.placeholder} />
      )}

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing(15),
  },
  iconButton: {
    height: rh(48),
    width: rw(48),
    backgroundColor: colors.surfaceVariant,
    borderRadius: radius.full,
  },
    placeholder: {
    height: rh(48),
    width: rw(48),
  },
});
