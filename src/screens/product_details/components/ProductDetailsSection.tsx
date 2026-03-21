import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme';
import { rf, spacing } from '../../../utils';

interface ProductDetailsSectionProps {
  location: string;
  shippingFee: number;
  highlights: string[];
  description: string;
}

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({
  location,
  shippingFee,
  highlights,
  description,
}) => {
  return (
    <View style={styles.container}>
      {/* Delivery Info */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>📍 Delivery: {location}</Text>
        <Text style={styles.infoText}>🚚 Shipping Fee: Rs. {shippingFee}</Text>
        <Text style={styles.infoLink}>🔁 Returns & Refund Policy</Text>
      </View>

      {/* Highlights */}
      {highlights.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Product Highlights</Text>
          {highlights.map((item, index) => (
            <Text key={index} style={styles.bullet}>
              • {item}
            </Text>
          ))}
        </View>
      )}

      {/* Description */}
      {description && (
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Product Details</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    </View>
  );
};

export default ProductDetailsSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing(16),
    marginTop: spacing(16),
  },
  infoBox: {
    gap: spacing(6),
  },
  infoText: {
    color: colors.textPrimary,
  },
  infoLink: {
    color: colors.primary,
  },
  section: {
    marginTop: spacing(20),
  },
  sectionHeader: {
    fontWeight: '700',
    marginBottom: spacing(8),
    color: colors.textPrimary,
  },
  bullet: {
    marginBottom: spacing(4),
    color: colors.textPrimary,
  },
  description: {
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
