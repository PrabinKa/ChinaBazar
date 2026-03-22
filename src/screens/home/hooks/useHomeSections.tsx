import { useMemo, useCallback } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Banner, BANNERS } from '../../../constants/data/banner';
import { CATEGORIES, TCategory } from '../../../constants/data/categories';
import { MORE_DEALS, TMoreDeals } from '../../../constants/data/moredeals';
import { PRODUCTS, Product } from '../../../constants/data/products';
import HomeHeader from '../components/HomeHeader';
import BannerCarousel from '../components/BannerCarousel';
import CategoriesList from '../components/CategoriesList';
import MoreDealsSection from '../components/MoreDealsSection';
import TodaysDeals from '../components/TodaysDeals';
import {
  OFFER_GRID,
  OFFERS_PRODUCT,
  TOffersGrid,
  TOffersProduct,
} from '../../../constants/data/offersection';
import OffersSection from '../components/OffersSection';
import { TABS, Tab } from '../../../constants/data/tabs';
import { ProductsWithTabs } from '../components/ProductsWithTabs';
import { rh } from '../../../utils';
import { colors } from '../../../theme';

const SECTION_SPACING = rh(6);

// Section types
export type SectionType =
  | 'header'
  | 'banner'
  | 'divider'
  | 'categories'
  | 'more_deals'
  | 'todays_deals'
  | 'offers_section'
  | 'products_with_tabs';

export interface HomeSectionItem {
  id: string;
  type: SectionType;
  data?: unknown;
}

export interface BannerSectionData {
  banners: Banner[];
  renderItem: ({ item }: { item: Banner }) => React.ReactElement;
}

export interface CategoriesSectionData {
  categories: TCategory[];
}

export interface MoreDealsSectionData {
  deals: TMoreDeals[];
}

export interface TodaysDealsSectionData {
  products: Product[];
}

export interface OffersSectionData {
  offersData: TOffersProduct[];
  offersGrid: TOffersGrid[];
}

export interface ProductsWithTabsData {
  tabs: Tab[];
  products: Product[];
}

const useHomeSections = () => {
  const carouselRenderItem = useCallback(({ item }: { item: Banner }) => {
    return (
      <Image
        source={item.image}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
    );
  }, []);

  const sections = useMemo<HomeSectionItem[]>(() => {
    return [
      {
        id: 'header',
        type: 'header',
      },
      {
        id: 'banner',
        type: 'banner',
        data: {
          banners: BANNERS,
          renderItem: carouselRenderItem,
        } as BannerSectionData,
      },
      {
        id: 'divider1',
        type: 'divider',
      },
      {
        id: 'categories',
        type: 'categories',
        data: {
          categories: CATEGORIES,
        } as CategoriesSectionData,
      },
      {
        id: 'divider2',
        type: 'divider',
      },
      {
        id: 'more_deals',
        type: 'more_deals',
        data: {
          deals: MORE_DEALS,
        } as MoreDealsSectionData,
      },
      {
        id: 'divider3',
        type: 'divider',
      },
      {
        id: 'todays_deals',
        type: 'todays_deals',
        data: {
          products: PRODUCTS,
        } as TodaysDealsSectionData,
      },
      {
        id: 'offers_section',
        type: 'offers_section',
        data: {
          offersData: OFFERS_PRODUCT,
          offersGrid: OFFER_GRID,
        } as OffersSectionData,
      },
      {
        id: 'divider',
        type: 'divider',
      },
      {
        id: 'products_with_tabs',
        type: 'products_with_tabs',
        data: {
          tabs: TABS,
          products: PRODUCTS,
        } as ProductsWithTabsData,
      }
    ];
  }, [carouselRenderItem]);

  const renderSectionItem = ({
    item,
  }: {
    item: HomeSectionItem;
  }): React.ReactElement => {
    const renderContent = () => {
      switch (item.type) {
        case 'header':
          return <HomeHeader />;
        case 'divider':
          return <View style={styles.divider} />;
        case 'banner': {
          const bannerData = item.data as BannerSectionData;
          return (
            <BannerCarousel
              data={bannerData.banners}
              renderItem={bannerData.renderItem}
            />
          );
        }
        case 'categories': {
          const categoriesData = item.data as CategoriesSectionData;
          return <CategoriesList categories={categoriesData.categories} />;
        }
        case 'more_deals': {
          const moreDealsData = item.data as MoreDealsSectionData;
          return <MoreDealsSection deals={moreDealsData.deals} />;
        }
        case 'todays_deals': {
          const todaysDealsData = item.data as TodaysDealsSectionData;
          return <TodaysDeals products={todaysDealsData.products} />;
        }
        case 'offers_section': {
          const offersSectionData = item.data as OffersSectionData;
          return (
            <OffersSection
              offersData={offersSectionData.offersData}
              offersGrid={offersSectionData.offersGrid}
            />
          );
        }
        case 'products_with_tabs': {
          const tabsData = item.data as ProductsWithTabsData;
          return (
            <ProductsWithTabs
              tabs={tabsData.tabs}
              products={tabsData.products}
            />
          );
        }
        default:
          return <></>;
      }
    };

    return (
      <View style={styles.sectionContainer}>
        {renderContent()}
      </View>
    );
  };

  const keyExtractor = (item: HomeSectionItem) => item.id;

  return {
    sections,
    renderSectionItem,
    keyExtractor,
  };
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: SECTION_SPACING,
  },
  divider: {
    height: 4,
    width: '100%',
    backgroundColor: colors.surfaceVariant,
  },
});

export default useHomeSections;
