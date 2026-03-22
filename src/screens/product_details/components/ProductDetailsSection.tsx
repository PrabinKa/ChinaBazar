import React, { useRef, useState } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import { colors } from '../../../theme';
import { layout, rf, spacing } from '../../../utils';
import Ionicons from '@react-native-vector-icons/ionicons';

interface ProductDetailsSectionProps {
  location: string;
  shippingFee: number;
  highlights: string[];
  description: string;
  specifications?: {
    brand?: string;
    model?: string;
    color?: string;
    ram?: string;
    storage?: string;
    fastCharging?: string;
  };
  disclaimer?: string;
}

const CollapsibleSection = ({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => {
  const animatedHeight = useRef(new Animated.Value(isOpen ? 1 : 0)).current;
  const [contentHeight, setContentHeight] = useState(0);
  const [measured, setMeasured] = useState(false);

  React.useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isOpen ? 1 : 0,
      duration: 320,
      useNativeDriver: false,
    }).start();
  }, [isOpen]);

  const chevronRotation = animatedHeight.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const heightInterpolation = animatedHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight],
  });

  return (
    <View style={styles.section}>
      <TouchableOpacity
        style={styles.sectionHeaderRow}
        onPress={onToggle}
        activeOpacity={0.7}
      >
        <Text style={styles.sectionHeader}>{title}</Text>
        <Animated.View style={{ transform: [{ rotate: chevronRotation }] }}>
          <Ionicons
            name="chevron-down-outline"
            size={20}
            color={colors.textSecondary}
          />
        </Animated.View>
      </TouchableOpacity>

      {!measured && (
        <View
          style={styles.hiddenMeasure}
          onLayout={e => {
            setContentHeight(e.nativeEvent.layout.height);
            setMeasured(true);
          }}
        >
          <View style={styles.sectionContent}>{children}</View>
        </View>
      )}

      {measured && (
        <Animated.View
          style={{ height: heightInterpolation, overflow: 'hidden' }}
        >
          <Animated.View
            style={{
              opacity: animatedHeight,
              paddingTop: spacing(8),
            }}
          >
            {children}
          </Animated.View>
        </Animated.View>
      )}
    </View>
  );
};

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({
  location,
  shippingFee,
  highlights,
  description,
  specifications,
  disclaimer,
}) => {
  const [showHighlights, setShowHighlights] = React.useState(true);
  const [showDetails, setShowDetails] = React.useState(false);

  const toggleHighlights = () => {
    LayoutAnimation.easeInEaseOut();
    setShowHighlights(prev => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Delivery Info */}
      <View style={styles.infoBox}>
        {/* Delivery */}
        <View style={styles.infoRow}>
          <View style={styles.infoLeft}>
            <Ionicons
              name="location-outline"
              size={20}
              color={colors.success}
            />
            <Text style={styles.infoTitle}>Delivery</Text>
          </View>

          <View style={styles.infoRight}>
            <Text style={styles.infoValue}>{location}</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color={colors.textSecondary}
            />
          </View>
        </View>

        {/* Shipping */}
        <View style={styles.infoRow}>
          <View style={styles.infoLeft}>
            <Ionicons
              name="car-outline"
              size={20}
              color={colors.success}
              style={{ alignSelf: 'flex-start' }}
            />
            <View>
              <Text style={styles.infoTitle}>Shipping Fee</Text>
              <Text style={styles.subText}>Delivery 20-22 March</Text>
            </View>
          </View>

          <Text
            style={{
              fontSize: rf(14),
              color: colors.textPrimary,
              fontWeight: '600',
            }}
          >
            Rs. {shippingFee}
          </Text>
        </View>

        {/* Returns */}
        <View style={styles.infoRow}>
          <View style={styles.infoLeft}>
            <Ionicons name="refresh-outline" size={20} color={colors.success} />
            <Text style={styles.infoTitle}>Returns & Refund Policy</Text>
          </View>

          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color={colors.textSecondary}
          />
        </View>
      </View>

      <View style={{ paddingHorizontal: spacing(15) }}>
        {/* Highlights */}
        {highlights.length > 0 && (
          <CollapsibleSection
            title="Product Highlights"
            isOpen={showHighlights}
            onToggle={toggleHighlights}
          >
            {highlights.map((item, index) => (
              <Text key={index} style={styles.bullet}>
                • {item}
              </Text>
            ))}
          </CollapsibleSection>
        )}

        {/* Description */}
        {description && (
          <CollapsibleSection
            title="Product Details"
            isOpen={showDetails}
            onToggle={() => setShowDetails(prev => !prev)}
          >
            <View style={styles.descriptionSection}>
              <Text style={styles.sectionSubTitle}>Description</Text>
              <Text style={styles.description}>{description}</Text>
            </View>

            {/* Specifications Table */}
            {specifications && Object.keys(specifications).length > 0 && (
              <View style={styles.specificationsSection}>
                <Text style={styles.sectionSubTitle}>Specifications</Text>
                <View style={styles.specsTable}>
                  {[
                    { label: 'Brand', value: specifications.brand },
                    { label: 'Model ID', value: specifications.model },
                    { label: 'Color', value: specifications.color },
                    { label: 'RAM', value: specifications.ram },
                    { label: 'Storage', value: specifications.storage },
                    {
                      label: 'Fast Charging',
                      value: specifications.fastCharging,
                    },
                  ]
                    .filter(row => !!row.value)
                    .map((row, index, arr) => (
                      <View
                        key={row.label}
                        style={[
                          styles.specsRow,
                          index % 2 === 1 && styles.specsRowAlt,
                          index === arr.length - 1 && { borderBottomWidth: 0 },
                        ]}
                      >
                        <View style={styles.specsLabel}>
                          <Text style={styles.specsLabelText}>{row.label}</Text>
                        </View>
                        <View style={styles.specsValue}>
                          <Text style={styles.specsValueText}>{row.value}</Text>
                        </View>
                      </View>
                    ))}
                </View>
              </View>
            )}

            {/* Disclaimer */}
            { (
              <View style={styles.disclaimerSection}>
                <Text style={styles.sectionSubTitle}>Disclaimer</Text>
                <Text style={styles.disclaimerText}>
                  {disclaimer ??
                    'Specifications and availability may vary by region. Prices are subject to change.'}
                </Text>
              </View>
            )}
          </CollapsibleSection>
        )}
      </View>
    </View>
  );
};

export default ProductDetailsSection;

const styles = StyleSheet.create({
  container: {
    marginTop: spacing(16),
  },
  infoBox: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingVertical: spacing(10),
    paddingHorizontal: spacing(12),
    gap: spacing(12),
  },
  infoRow: {
    ...layout.rowSpaceBetween,
    alignItems: 'center',
  },
  infoLeft: {
    ...layout.rowAlignCenter,
    gap: spacing(10),
    flex: 1,
  },
  infoRight: {
    ...layout.rowAlignCenter,
    gap: spacing(6),
  },
  infoTitle: {
    fontSize: rf(14),
    color: colors.textPrimary,
    fontWeight: '500',
  },
  infoValue: {
    fontSize: rf(13),
    color: colors.textSecondary,
  },
  subText: {
    fontSize: rf(12),
    color: colors.textSecondary,
    marginTop: 2,
  },
  section: {
    marginTop: spacing(20),
  },
  sectionHeader: {
    fontWeight: '700',
    marginBottom: spacing(8),
    color: colors.textPrimary,
    fontSize: rf(15),
  },
  bullet: {
    marginBottom: spacing(6),
    color: colors.textPrimary,
    lineHeight: 20,
  },
  description: {
    color: colors.textSecondary,
    lineHeight: 22,
    fontSize: rf(13),
    flexWrap: 'wrap',
  },
  descriptionSection: {
    marginBottom: spacing(16),
  },
  sectionSubTitle: {
    fontSize: rf(14),
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing(8),
  },
  specificationsSection: {
    marginBottom: spacing(16),
  },
  // Replace these styles:
  specsTable: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  specsRow: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  specsRowAlt: {
    backgroundColor: colors.surface,
  },
  specsLabel: {
    flex: 1,
    paddingVertical: spacing(10),
    paddingHorizontal: spacing(12),
    backgroundColor: colors.surfaceVariant,
  },
  specsLabelText: {
    fontSize: rf(13),
    color: colors.textSecondary,
    fontWeight: '400',
  },
  specsValue: {
    flex: 1.5,
    paddingVertical: spacing(10),
    paddingHorizontal: spacing(12),
  },
  specsValueText: {
    fontSize: rf(13),
    color: colors.textPrimary,
    fontWeight: '400',
  },
  disclaimerSection: {
    marginBottom: spacing(16),
  },
  disclaimerHeader: {
    marginBottom: spacing(6),
  },
  disclaimerText: {
    fontSize: rf(13),
    color: colors.textSecondary,
    lineHeight: 20,
  },
  sectionHeaderRow: {
    ...layout.rowSpaceBetween,
    alignItems: 'center',
  },
  sectionContent: {
    marginTop: spacing(8),
  },
  hiddenMeasure: {
    position: 'absolute',
    opacity: 0,
    zIndex: -1,
  },
});
