import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { layout, rf, spacing } from '../../utils';
import { colors } from '../../theme';

export interface SectionHeaderProps {
  title: string;
  onViewAllPress?: () => void;
  containerStyle?: ViewStyle;
  showViewAll?: boolean;
  viewAllColor?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  onViewAllPress,
  containerStyle,
  showViewAll = true,
  viewAllColor = colors.highlight,
}) => {
  return (
    <View style={[styles.container, containerStyle, layout.spaceBetweenRow]}>
      <Text style={[styles.title]}>{title}</Text>
      {showViewAll && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[layout.spaceAroundRow]}
          onPress={onViewAllPress}
        >
          <Text style={[styles.viewAllButton, { color: viewAllColor }]}>
            View All
          </Text>
          <Ionicons name="chevron-forward" size={22} color={viewAllColor} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing(16),
    paddingHorizontal: spacing(16),
  },
  title: {
    fontSize: rf(18),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  viewAllButton: {
    fontSize: rf(14),
    fontWeight: '600',
  },
});
