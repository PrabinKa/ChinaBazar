import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { TCategory } from '../../../constants/data/categories';
import { rf, rh, rw, spacing } from '../../../utils';
import { colors, radius, shadow } from '../../../theme';
import { SectionHeader } from '../../../components';

type Props = {
  categories?: TCategory[];
};

const CategoriesList: React.FC<Props> = ({ categories = [] }) => {
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
    <View>
      <SectionHeader
        title="Categories"
        onViewAllPress={() => {}}
        containerStyle={styles.header}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map(renderCategoryItem)}
      </ScrollView>
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  header: {
    marginBottom: spacing(16),
    paddingHorizontal: spacing(16),
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
