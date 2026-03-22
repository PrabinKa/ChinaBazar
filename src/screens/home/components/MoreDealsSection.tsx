import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { TMoreDeals } from '../../../constants/data/moredeals';
import { rh, rw, spacing } from '../../../utils';
import { colors, radius, shadow } from '../../../theme';
import { SectionHeader } from '../../../components';

type Props = {
  deals?: TMoreDeals[];
};

const MoreDealsSection: React.FC<Props> = ({ deals = [] }) => {
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
    <View>
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
        {deals.map(renderDealItem)}
      </ScrollView>
    </View>
  );
};

export default MoreDealsSection;

const styles = StyleSheet.create({
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
