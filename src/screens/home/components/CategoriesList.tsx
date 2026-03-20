import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { CATEGORIES, TCategory } from '../../../constants/data/categories';
import { layout, rf, rh, rw, spacing } from '../../../utils';
import { colors, radius, shadow } from '../../../theme';
import Ionicons from '@react-native-vector-icons/ionicons';

const CategoriesList: React.FC = () => {
  const renderCategoryItem = (item: TCategory) => {
    return (
      <View key={item.id} style={styles.categoryItem}>
        <Image
          source={{ uri: item.image }}
          style={styles.categoryImage}
          resizeMode="cover"
        />
        <Text style={styles.categoryName} numberOfLines={2}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, layout.spaceBetweenRow]}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity activeOpacity={0.7} style={[layout.spaceAroundRow]} onPress={() => {}}>
          <Text style={styles.viewAllButton}>View All</Text>
          <Ionicons name="chevron-forward" size={22} color={colors.highlight} />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {CATEGORIES.map(renderCategoryItem)}
      </ScrollView>
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    marginTop: spacing(20)
  },
  header: {
    marginBottom: spacing(16),
    paddingHorizontal: spacing(16)
  },
  title: {
    fontSize: rf(18),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  viewAllButton: {
    fontSize: rf(14),
    fontWeight: '600',
    color: colors.highlight,
  },
  scrollContent: {
    paddingHorizontal: spacing(16),
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: spacing(16),
    width: rw(80),
  },
  categoryImage: {
    width: rh(80),
    height: rw(80),
    borderRadius: radius.full,
    backgroundColor: colors.surfaceVariant,
    ...shadow('sm'),
  },
  categoryName: {
    marginTop: spacing(8),
    fontSize: rf(14),
    fontWeight: '500',
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
