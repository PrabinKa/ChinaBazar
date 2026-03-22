import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import { spacing, rf } from '../../../utils';
import { colors } from '../../../theme';
import Ionicons from '@react-native-vector-icons/ionicons';
import { MediaItem, SAMPLE_PHOTOS, SAMPLE_VIDEOS } from '../../../constants/data/productReviews';

interface MediaGalleryProps {
  photos?: MediaItem[];
  videos?: MediaItem[];
}

const MediaGallery: React.FC<MediaGalleryProps> = ({
  photos = SAMPLE_PHOTOS,
  videos = SAMPLE_VIDEOS,
}) => {
  const renderPhotoThumbnail = (item: MediaItem) => (
    <View key={item.id} style={styles.thumbnailContainer}>
      <Image source={{ uri: item.uri }} style={styles.thumbnail} />
      <View style={styles.photoOverlay} />
    </View>
  );

  const renderVideoThumbnail = (item: MediaItem) => (
    <View key={item.id} style={styles.thumbnailContainer}>
      <Image source={{ uri: item.uri }} style={styles.thumbnail} />
      <View style={styles.videoOverlay} />
      <View style={styles.playButtonContainer}>
        <Ionicons name="play-circle" size={28} color="#FFFFFF" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* All Photos Section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>All Photos</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {photos.map(renderPhotoThumbnail)}
        </ScrollView>
      </View>

      {/* All Videos Section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>All Videos</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {videos.map(renderVideoThumbnail)}
        </ScrollView>
      </View>
    </View>
  );
};

export default MediaGallery;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing(15),
  },
  section: {
    marginBottom: spacing(16),
  },
  sectionLabel: {
    fontSize: rf(14),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing(8),
  },
  scrollContent: {
    gap: spacing(6),
  },
  thumbnailContainer: {
    width: rf(80),
    height: rf(80),
    borderRadius: rf(8),
    overflow: 'hidden',
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  photoOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  videoOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  playButtonContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
