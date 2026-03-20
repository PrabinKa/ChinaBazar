import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { colors, radius } from '../../../theme';
import { spacing, layout, rh, rw } from '../../../utils';
import { SearchBar } from '../../../components';
import { IconName } from '../../../types/icon';
import { useNavigation } from '@react-navigation/native';

type HeaderIconButtonProps = {
  icon: IconName;
  onPress?: () => void;
};

const HeaderIconButton = ({ icon, onPress }: HeaderIconButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.iconButton, layout.center]}
    >
      <Ionicons name={icon} size={22} color={colors.primary} />
    </TouchableOpacity>
  );
};

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, layout.spaceBetweenRow]}>
      <HeaderIconButton icon="heart-outline" onPress={() => {}} />
      <SearchBar mode='button' onPress={() => {navigation.navigate('Search')}} />
      <HeaderIconButton icon="notifications-outline" onPress={() => {}} />
    </View>
  );
};

export default HomeHeader;

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
});
