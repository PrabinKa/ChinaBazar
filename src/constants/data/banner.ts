import { ImageProps } from 'react-native';

export type Banner = {
  id: number;
  image: ImageProps;
};

export const BANNERS: Banner[] = [
  { id: 1, image: require('../../assets/images/banner1.jpg') },
  { id: 2, image: require('../../assets/images/banner2.webp') },
  { id: 3, image: require('../../assets/images/banner1.jpg') },
];
