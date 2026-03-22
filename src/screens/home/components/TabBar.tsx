import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Tab } from '../../../constants/data/tabs';
import { layout, rf, spacing } from '../../../utils';
import { colors } from '../../../theme';
import { IconName } from '../../../types/icon';

interface TabBarProps {
  tabs: Tab[];
  activeTabId: string;
  onTabPress: (tab: Tab) => void;
}

export const TabBar: React.FC<TabBarProps> = ({
  tabs,
  activeTabId,
  onTabPress,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tab, isActive && styles.activeTab]}
              onPress={() => onTabPress(tab)}
              activeOpacity={0.7}
            >
              {tab.icon && (
                <Ionicons
                  name={tab.icon as IconName}
                  size={rf(14)}
                  color={isActive ? colors.primary : colors.textPrimary}
                  style={styles.icon}
                />
              )}
              <View style={styles.labelContainer}>
                {tab.badge && (
                  <View
                    style={[
                      styles.badge,
                      { backgroundColor: tab.badgeColor || colors.success },
                    ]}
                  >
                    <Text style={styles.badgeText}>{tab.badge}</Text>
                  </View>
                )}
                <Text
                  style={[
                    styles.label,
                    isActive && styles.activeLabel,
                    !isActive && styles.inactiveLabel,
                  ]}
                >
                  {tab.label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing(10),
  },
  scrollContent: {
    paddingHorizontal: spacing(16),
    gap: spacing(8),
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing(14),
    paddingVertical: spacing(8),
    borderRadius: 50,
    backgroundColor: colors.surface,
    borderWidth: 0.5,
    borderColor: colors.border,
  },
  activeTab: {
    backgroundColor: colors.primaryLight,
  },
  icon: {
    marginRight: spacing(4),
  },
  labelContainer: {
    ...layout.rowAlignCenter
  },
  badge: {
    paddingHorizontal: spacing(4),
    paddingVertical: spacing(2),
    borderRadius: 4,
    marginRight: spacing(4),
  },
  badgeText: {
    color: colors.textOnPrimary,
    fontSize: rf(9),
    fontWeight: '600',
  },
  label: {
    fontSize: rf(13),
    fontWeight: '600',
    color: colors.textOnPrimary,
  },
  activeLabel: {
    color: colors.primary,
    fontWeight: '600',
  },
  inactiveLabel: {
    color: colors.textPrimary,
    fontWeight: '400',
  },
});