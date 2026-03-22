import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { spacing, rf, layout } from '../../../utils';
import { colors } from '../../../theme';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Review, SAMPLE_REVIEWS } from '../../../constants/data/productReviews';

// Avatar color generator based on name
const getAvatarColor = (name: string): string => {
  const avatarColors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
    '#FFEAA7',
    '#DDA0DD',
    '#98D8C8',
    '#F7DC6F',
  ];
  const index = name.charCodeAt(0) % avatarColors.length;
  return avatarColors[index];
};

// Render star rating
const renderStars = (rating: number) => {
  return (
    <View style={styles.starsRow}>
      {[1, 2, 3, 4, 5].map(star => (
        <Ionicons
          key={star}
          name={star <= rating ? 'star' : 'star-outline'}
          size={rf(12)}
          color={colors.rating}
        />
      ))}
    </View>
  );
};

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const initial = review.reviewerName.charAt(0).toUpperCase();
  const avatarColor = getAvatarColor(review.reviewerName);
  const showMoreIndicator = review.images.length > 4;
  const visibleImages = review.images.slice(0, 4);
  const extraCount = review.images.length - 4;

  return (
    <View style={styles.card}>
      {/* Header: Avatar, Name, Rating, Date */}
      <View style={styles.header}>
        <View style={[styles.avatar, { backgroundColor: avatarColor }]}>
          <Text style={styles.avatarInitial}>{initial}</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.ratingDateRow}>
            {renderStars(review.rating)}
            <Text style={styles.dot}>·</Text>
            <Text style={styles.date}>{review.date}</Text>
          </View>
          <Text style={styles.reviewerName}>{review.reviewerName}</Text>
        </View>
      </View>

      {/* Review Body */}
      <View style={styles.body}>
        <Text style={styles.reviewText}>{review.text}</Text>

        {review.images.length > 0 && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.imagesScrollContent}
          >
            {visibleImages.map((image, index) => (
              <View
                key={image.id}
                style={[
                  styles.reviewImageContainer,
                  index === 3 &&
                    showMoreIndicator &&
                    styles.lastImageWithOverlay,
                ]}
              >
                <Image source={{ uri: image.uri }} style={styles.reviewImage} />
                {index === 3 && showMoreIndicator && (
                  <View style={styles.moreOverlay}>
                    <Text style={styles.moreText}>+{extraCount}</Text>
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        )}
      </View>

      <View style={styles.footer}>
        <Text style={styles.variantInfo}>
          Color Family: {review.colorFamily}, Size: {review.size}
        </Text>
        <View style={styles.helpfulRow}>
          <Ionicons
            name="thumbs-up-outline"
            size={rf(14)}
            color={colors.textSecondary}
          />
          <Text style={styles.helpfulCount}>{review.helpfulCount}</Text>
        </View>
      </View>
    </View>
  );
};

interface ReviewCardsProps {
  reviews?: Review[];
}

const ReviewCards: React.FC<ReviewCardsProps> = ({
  reviews = SAMPLE_REVIEWS,
}) => {
  return (
    <View style={styles.container}>
      {reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </View>
  );
};

export default ReviewCards;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing(15),
  },
  card: {
    paddingVertical: spacing(16),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  header: {
    ...layout.rowAlignCenter,
    marginBottom: spacing(12),
  },
  avatar: {
    width: rf(36),
    height: rf(36),
    borderRadius: rf(999),
    ...layout.center,
  },
  avatarInitial: {
    color: '#FFFFFF',
    fontSize: rf(16),
    fontWeight: '700',
  },
  headerRight: {
    marginLeft: spacing(12),
    flex: 1,
  },
  reviewerName: {
    fontSize: rf(13),
    fontWeight: '700',
    color: colors.textSecondary,
    marginBottom: spacing(2),
  },
  ratingDateRow: {
    ...layout.rowAlignCenter,
  },
  starsRow: {
    ...layout.rowAlignCenter,
  },
  dot: {
    fontSize: rf(11),
    color: colors.textSecondary,
    marginHorizontal: spacing(4),
  },
  date: {
    fontSize: rf(11),
    color: colors.textSecondary,
  },
  body: {
    marginBottom: spacing(12),
  },
  reviewText: {
    fontSize: rf(13),
    color: colors.textSecondary,
    lineHeight: rf(20),
    marginBottom: spacing(12),
  },
  imagesScrollContent: {
    gap: spacing(6),
  },
  reviewImageContainer: {
    width: rf(72),
    height: rf(72),
    borderRadius: rf(8),
    overflow: 'hidden',
  },
  reviewImage: {
    width: '100%',
    height: '100%',
  },
  lastImageWithOverlay: {
    position: 'relative',
  },
  moreOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    ...layout.center,
  },
  moreText: {
    color: '#FFFFFF',
    fontSize: rf(13),
    fontWeight: '700',
  },
  footer: {
    ...layout.spaceBetweenRow,
  },
  variantInfo: {
    fontSize: rf(11),
    color: colors.textSecondary,
  },
  helpfulRow: {
    ...layout.flexRowCenter,
    gap: spacing(4),
  },
  helpfulCount: {
    fontSize: rf(11),
    color: colors.textSecondary,
  },
});
