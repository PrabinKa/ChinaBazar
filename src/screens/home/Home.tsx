import React, { useCallback } from 'react';
import { Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../theme/colors';
import HomeHeader from './components/HomeHeader';
import BannerCarousel from './components/BannerCarousel';
import { Banner, BANNERS } from '../../constants';

const Home = () => {
  const carouselRenderItem = useCallback(
    ({ item }: { item: Banner }) => {
      return (
        <Image
          source={item.image}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      );
    },
    [BANNERS],
  );

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <BannerCarousel data={BANNERS} renderItem={carouselRenderItem} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
