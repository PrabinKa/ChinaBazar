import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Product } from '../../constants/data/products';
import { colors, radius } from '../../theme';
import { formatPrice, rf, spacing } from '../../utils';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { AppStackNavigationProp } from '../../types/navigation';

interface ProductCardProp {
  key?: string;
  product: Product;
  cardWidth?: number;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const DEFAULT_CARD_WIDTH = SCREEN_WIDTH * 0.38;

export const ProductCard: React.FC<ProductCardProp> = ({
  key,
  product,
  cardWidth,
}) => {
  const navigation = useNavigation<AppStackNavigationProp<'ProductDetails'>>();

  const effectiveCardWidth = cardWidth ?? DEFAULT_CARD_WIDTH;
  const imageHeight = effectiveCardWidth * 0.8;

  return (
    <TouchableOpacity
      key={key}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('ProductDetails', {productId: product.id})}
      style={[styles.cardContainer, { width: effectiveCardWidth }]}
    >
      <View
        style={[
          styles.imageContainer,
          {
            borderRadius: radius.lg,
            width: effectiveCardWidth,
            height: imageHeight,
          },
        ]}
      >
        <View style={styles.badgeContainer}>
          {product.isNew && (
            <View
              style={[
                styles.badgeStyles,
                { backgroundColor: colors.primary, marginRight: spacing(4) },
              ]}
            >
              <Text style={styles.badgeText}>New</Text>
            </View>
          )}
          {product.discount > 0 && (
            <View
              style={[styles.badgeStyles, { backgroundColor: colors.accent }]}
            >
              <Text style={styles.badgeText}>-{product.discount}%</Text>
            </View>
          )}
        </View>
        <Image
          source={{ uri: product.images[0] }}
          style={[styles.productImage, { borderRadius: radius.lg }]}
          resizeMode="cover"
        />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {product.name}
        </Text>
        <View>
          <Text style={styles.newPrice}>{formatPrice(product.price)}</Text>
          <Text style={styles.originalPrice}>
            {formatPrice(product.originalPrice)}
          </Text>
        </View>
        <View style={styles.ratingContainer}>
          <Ionicons name="star-sharp" size={20} color={colors.rating} />
          <Text style={styles.ratingText}>{product.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing(16),
  },
  header: {
    marginBottom: spacing(16),
    paddingHorizontal: spacing(16),
  },
  headerContainer: {
    paddingHorizontal: spacing(16),
    marginBottom: spacing(12),
  },
  headerTitle: {
    fontSize: rf(18),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  scrollContent: {
    paddingHorizontal: spacing(16),
    gap: spacing(12),
  },
  cardContainer: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginRight: spacing(12),
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: colors.surfaceVariant,
  },
  badgeContainer: {
    position: 'absolute',
    left: spacing(10),
    top: spacing(7),
    flexDirection: 'row',
  },
  badgeStyles: {
    paddingHorizontal: spacing(8),
    paddingVertical: spacing(4),
    borderRadius: radius.sm,
    zIndex: 1,
  },
  badgeText: {
    color: colors.background,
    fontSize: rf(10),
    fontWeight: '700',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productInfo: {
    padding: spacing(10),
  },
  productName: {
    fontSize: rf(13),
    fontWeight: '600',
    color: '#000000',
    marginBottom: spacing(6),
    lineHeight: rf(18),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing(6),
    flexWrap: 'wrap',
  },
  newPrice: {
    fontSize: rf(14),
    fontWeight: '700',
    color: colors.primary,
    marginRight: spacing(6),
  },
  originalPrice: {
    fontSize: rf(12),
    color: colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: rf(11),
    color: colors.textSecondary,
  },
});
