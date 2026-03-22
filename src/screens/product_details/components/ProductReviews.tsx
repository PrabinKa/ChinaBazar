import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../../theme';
import { layout, rf, spacing } from '../../../utils';
import Ionicons from '@react-native-vector-icons/ionicons';

export type StarRatingBreakdown = {
  5: number;
  4: number;
  3: number;
  2: number;
  1: number;
};

interface ProductReviewsProps {
  rating: number;
  totalReviews: number;
  starBreakdown?: StarRatingBreakdown;
  onViewAll?: () => void;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({
  rating,
  totalReviews,
  starBreakdown = { 5: 50, 4: 20, 3: 10, 2: 3, 1: 1 },
  onViewAll,
}) => {
  // Find the maximum count to calculate proportional widths
  const maxCount = Math.max(...Object.values(starBreakdown));

  // Generate star rows from 5 to 1
  const starRows = [5, 4, 3, 2, 1] as const;

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Reviews</Text>
        <TouchableOpacity
          style={styles.viewAllButton}
          onPress={onViewAll}
          activeOpacity={0.7}
        >
          <Text style={styles.viewAllText}>View All</Text>
          <Ionicons
            name="chevron-forward"
            size={16}
            color={colors.rating}
          />
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      <View style={styles.contentRow}>
        <View style={styles.leftColumn}>
          <Text style={styles.ratingNumber}>{rating.toFixed(1)}</Text>
          <View style={styles.starsRow}>
            {[...Array(5)].map((_, index) => (
              <Ionicons
                key={index}
                name="star"
                size={rf(20)}
                color={colors.rating}
                style={styles.starIcon}
              />
            ))}
          </View>
          <Text style={styles.totalReviews}>({totalReviews})</Text>
        </View>

        <View style={styles.rightColumn}>
          {starRows.map(starLevel => {
            const count = starBreakdown[starLevel];
            const progress = maxCount > 0 ? (count / maxCount) * 100 : 0;

            return (
              <View key={starLevel} style={styles.starRow}>
                <Text style={styles.starNumber}>{starLevel}</Text>
                <Ionicons
                  name="star"
                  size={rf(12)}
                  color={colors.rating}
                  style={styles.smallStar}
                />
                <View style={styles.progressBarContainer}>
                  <View style={styles.progressBarTrack}>
                    <View
                      style={[
                        styles.progressBarFill,
                        { width: `${progress}%` },
                      ]}
                    />
                  </View>
                </View>
                <Text style={styles.countText}>{count}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default ProductReviews;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing(15),
    paddingVertical: spacing(16),
    backgroundColor: colors.surface,
  },
  headerRow: {
    ...layout.rowSpaceBetween,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: rf(18),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  viewAllButton: {
    ...layout.rowAlignCenter,
    gap: spacing(2),
  },
  viewAllText: {
    fontSize: rf(14),
    color: colors.rating,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginTop: spacing(12),
    marginBottom: spacing(16),
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftColumn: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingNumber: {
    fontSize: rf(48),
    fontWeight: '700',
    color: colors.textPrimary,
    lineHeight: rf(52),
  },
  starsRow: {
    flexDirection: 'row',
    marginTop: spacing(4),
  },
  starIcon: {
    marginRight: spacing(2),
  },
  totalReviews: {
    fontSize: rf(14),
    color: colors.textSecondary,
    marginTop: spacing(4),
  },
  rightColumn: {
    width: '65%',
    paddingLeft: spacing(16),
    justifyContent: 'center',
    gap: spacing(6),
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: rf(20),
  },
  starNumber: {
    fontSize: rf(12),
    color: colors.textSecondary,
    width: rf(14),
    textAlign: 'right',
    marginRight: spacing(4),
  },
  smallStar: {
    marginRight: spacing(6),
  },
  progressBarContainer: {
    flex: 1,
    marginRight: spacing(8),
  },
  progressBarTrack: {
    height: rf(6),
    backgroundColor: '#E0E0E0',
    borderRadius: rf(3),
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.rating,
    borderRadius: rf(3),
  },
  countText: {
    fontSize: rf(12),
    color: colors.textSecondary,
    width: rf(30),
    textAlign: 'right',
  },
});
