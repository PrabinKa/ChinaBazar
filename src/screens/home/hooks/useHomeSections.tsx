import { useMemo, useCallback } from 'react';
import { Image } from 'react-native';
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

// Section types
export type SectionType =
  | 'header'
  | 'banner'
  | 'categories'
  | 'more_deals'
  | 'todays_deals'
  | 'offers_section';

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
        id: 'categories',
        type: 'categories',
        data: {
          categories: CATEGORIES,
        } as CategoriesSectionData,
      },
      {
        id: 'more_deals',
        type: 'more_deals',
        data: {
          deals: MORE_DEALS,
        } as MoreDealsSectionData,
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
      }
    ];
  }, [carouselRenderItem]);

  const renderSectionItem = ({
    item,
  }: {
    item: HomeSectionItem;
  }): React.ReactElement => {
    switch (item.type) {
      case 'header':
        return <HomeHeader />;
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
      default:
        return <></>;
    }
  };

  const keyExtractor = (item: HomeSectionItem) => item.id;

  return {
    sections,
    renderSectionItem,
    keyExtractor,
  };
};

export default useHomeSections;
