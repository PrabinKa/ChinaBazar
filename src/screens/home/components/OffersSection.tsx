import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { layout, rf, rh, rw, spacing } from '../../../utils';
import { colors } from '../../../theme';
import { TOffersGrid, TOffersProduct } from '../../../constants/data/offersection';

interface OfferSectionProps {
    offersData: TOffersProduct[];
    offersGrid: TOffersGrid[];
}

const ProductItem = ({ item }: any) => {
  return (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.priceTag}>
        <Text style={styles.priceText}>NPR {item.price}</Text>
      </View>
    </View>
  );
};

const OfferCard = ({ item }: any) => {
  return (
    <View style={styles.offerCard}>
      <Text style={styles.offerTitle}>{item.title}</Text>

      <View style={styles.offerContent}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.priceTag}>
          <Text style={styles.priceText}>NPR {item.price}</Text>
        </View>
      </View>
    </View>
  );
};

const OffersSection: React.FC<OfferSectionProps> = ({offersData, offersGrid}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Skin Care Products</Text>

        <View style={layout.spaceBetweenRow}>
          {offersData.map(item => (
            <ProductItem key={item.id} item={item} />
          ))}
        </View>
      </View>
      <View style={styles.gridContainer}>
        {offersGrid.map(item => (
          <OfferCard key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default OffersSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing(15),
    marginVertical: spacing(12),
    gap: spacing(12),
  },

  card: {
    backgroundColor: colors.surfaceVariant,
    padding: spacing(15),
    borderRadius: 16,
  },

  title: {
    fontSize: rf(16),
    fontWeight: '600',
    marginBottom: spacing(12),
    color: colors.textPrimary,
  },

  productItem: {
    alignItems: 'center',
  },

  image: {
    height: rh(70),
    width: rw(70),
    resizeMode: 'contain',
  },

  priceTag: {
    marginTop: spacing(-10),
    backgroundColor: colors.primary,
    paddingVertical: spacing(6),
    paddingHorizontal: spacing(10),
    borderRadius: 20,
  },

  priceText: {
    color: colors.background,
    fontSize: rf(12),
    fontWeight: '600',
  },
  gridContainer: {
    flexDirection: 'row',
    gap: spacing(12),
  },

  offerCard: {
    flex: 1,
    backgroundColor: colors.surfaceVariant,
    padding: spacing(10),
    borderRadius: 16,
  },

  offerTitle: {
    fontSize: rf(14),
    color: colors.textPrimary,
  },

  offerContent: {
    marginTop: spacing(8),
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing(6),
  },
});
