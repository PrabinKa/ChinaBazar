import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { MORE_DEALS, TMoreDeals } from '../../../constants/data/moredeals';
import { rh, rw, spacing } from '../../../utils';
import { colors, radius, shadow } from '../../../theme';
import { SectionHeader } from '../../../components';

const MoreDealsSection: React.FC = () => {
  const renderDealItem = (item: TMoreDeals) => {
    return (
      <View key={item.id} style={styles.dealItem}>
        <Image
          source={{ uri: item.image }}
          style={styles.dealImage}
          resizeMode="cover"
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SectionHeader
        title="More Deals"
        onViewAllPress={() => {}}
        containerStyle={styles.header}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {MORE_DEALS.map(renderDealItem)}
      </ScrollView>
    </View>
  );
};

export default MoreDealsSection;

const styles = StyleSheet.create({
  container: {
    marginTop: spacing(20),
  },
  header: {
    paddingHorizontal: spacing(16),
  },
  scrollContent: {
    paddingHorizontal: spacing(16),
  },
  dealItem: {
    marginRight: spacing(12),
  },
  dealImage: {
    width: rw(100),
    height: rh(100),
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceVariant,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadow('sm'),
  },
});
