import { useMemo, useCallback } from 'react';
import { Product } from '../../../constants/data/products';
import ProductImageCarousel from '../components/ProductImageCarousel';
import ProductInfo from '../components/ProductInfo';
import ProductVariants from '../components/ProductVariants';
import ProductDetailsSection from '../components/ProductDetailsSection';
import { Header } from '../../../components';
import { AppStackNavigationProp } from '../../../types/navigation';

// Section types
export type ProductDetailsSectionType =
  | 'header'
  | 'image_carousel'
  | 'product_info'
  | 'product_variants'
  | 'product_details';

export interface ProductDetailsSectionItem {
  id: string;
  type: ProductDetailsSectionType;
  data?: unknown;
}

export interface HeaderData {
  navigation: AppStackNavigationProp<'ProductDetails'>;
}

export interface ImageCarouselData {
  images: string[];
}

export interface ProductInfoData {
  name: string;
  rating: number;
  totalReviews: number;
  price: number;
  originalPrice: number;
  discount: number;
}

export interface ProductVariantsData {
  colors: string[];
  storage: string[];
  selectedColorIndex: number;
  selectedStorageIndex: number;
}

export interface ProductDetailsData {
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

interface UseProductDetailsSectionsProps {
  product: Product | null;
  selectedColorIndex: number;
  selectedStorageIndex: number;
  onColorSelect: (index: number) => void;
  onStorageSelect: (index: number) => void;
  navigation: AppStackNavigationProp<'ProductDetails'>;
}

const useProductDetailsSections = ({
  product,
  selectedColorIndex,
  selectedStorageIndex,
  onColorSelect,
  onStorageSelect,
  navigation,
}: UseProductDetailsSectionsProps) => {
  // Extract product data with fallbacks
  const {
    name = 'Product Name',
    price = 0,
    originalPrice = 0,
    discount = 0,
    rating = 0,
    totalReviews = 0,
    images = [],
    description = '',
    highlights = [],
    specifications,
    location = 'Kathmandu',
    shippingFee = 0,
    variants = [],
  } = product || {};

  // Extract color variants from product data or use default
  const colorOptions = useMemo(() => {
    if (product?.specifications?.color) {
      const baseColor = product.specifications.color.toLowerCase();
      const colorMap: Record<string, string> = {
        black: '#000000',
        silver: '#C0C0C0',
        blue: '#1E3A8A',
        gold: '#FFD700',
        white: '#FFFFFF',
        red: '#DC2626',
        green: '#16A34A',
      };
      return [colorMap[baseColor] || '#000000', '#C0C0C0', '#1E3A8A'];
    }
    return ['#000000', '#C0C0C0', '#1E3A8A'];
  }, [product?.specifications?.color]);

  // Extract storage variants from product data
  const storageOptions = useMemo(() => {
    const storageVariants = variants
      .filter(v => v.type === 'storage')
      .map(v => v.value);
    return storageVariants.length > 0
      ? storageVariants
      : ['64 GB', '256 GB', '512 GB', '1 TB'];
  }, [variants]);

  const sections = useMemo<ProductDetailsSectionItem[]>(() => {
    return [
      {
        id: 'header',
        type: 'header',
        data: { navigation } as HeaderData,
      },
      {
        id: 'image_carousel',
        type: 'image_carousel',
        data: { images } as ImageCarouselData,
      },
      {
        id: 'product_info',
        type: 'product_info',
        data: {
          name,
          rating,
          totalReviews,
          price,
          originalPrice,
          discount,
        } as ProductInfoData,
      },
      {
        id: 'product_variants',
        type: 'product_variants',
        data: {
          colors: colorOptions,
          storage: storageOptions,
          selectedColorIndex,
          selectedStorageIndex,
        } as ProductVariantsData,
      },
      {
        id: 'product_details',
        type: 'product_details',
        data: {
          location,
          shippingFee,
          highlights,
          description,
          specifications,
        } as ProductDetailsData,
      },
    ];
  }, [
    images,
    name,
    rating,
    totalReviews,
    price,
    originalPrice,
    discount,
    colorOptions,
    selectedColorIndex,
    storageOptions,
    selectedStorageIndex,
    location,
    shippingFee,
    highlights,
    description,
    specifications,
  ]);

  const renderSectionItem = useCallback(
    ({ item }: { item: ProductDetailsSectionItem }): React.ReactElement => {
      switch (item.type) {
        case 'header': {
          const data = item.data as HeaderData;
          return (
            <Header
              leftIcon="chevron-back"
              rightIcon="cart-outline"
              searchMode="button"
              placeholder="Search in Chinabazar"
              onSearchPressed={() => data.navigation.navigate('Search')}
              onLeftPress={data.navigation.goBack}
              onRightPress={() => {}}
            />
          );
        }
        case 'image_carousel': {
          const data = item.data as ImageCarouselData;
          return <ProductImageCarousel images={data.images} />;
        }
        case 'product_info': {
          const data = item.data as ProductInfoData;
          return (
            <ProductInfo
              name={data.name}
              rating={data.rating}
              totalReviews={data.totalReviews}
              price={data.price}
              originalPrice={data.originalPrice}
              discount={data.discount}
            />
          );
        }
        case 'product_variants': {
          const data = item.data as ProductVariantsData;
          return (
            <ProductVariants
              colors={data.colors}
              storage={data.storage}
              selectedColorIndex={data.selectedColorIndex}
              selectedStorageIndex={data.selectedStorageIndex}
              onColorSelect={onColorSelect}
              onStorageSelect={onStorageSelect}
            />
          );
        }
        case 'product_details': {
          const data = item.data as ProductDetailsData;
          return (
            <ProductDetailsSection
              location={data.location}
              shippingFee={data.shippingFee}
              highlights={data.highlights}
              description={data.description}
              specifications={data.specifications}
              disclaimer={data.disclaimer}
            />
          );
        }
        default:
          return <></>;
      }
    },
    [onColorSelect, onStorageSelect],
  );

  const keyExtractor = (item: ProductDetailsSectionItem) => item.id;

  return {
    sections,
    renderSectionItem,
    keyExtractor,
  };
};

export default useProductDetailsSections;
