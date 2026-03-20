export interface TOffersProduct {
  id: number;
  image: string;
  price: number;
}

export interface TOffersGrid extends TOffersProduct {
  title: string;
}

export const OFFERS_PRODUCT: TOffersProduct[] = [
  { id: 1, image: 'https://picsum.photos/200/200', price: 5999 },
  { id: 2, image: 'https://picsum.photos/200/201', price: 5999 },
  { id: 3, image: 'https://picsum.photos/200/203', price: 5999 },
];

export const OFFER_GRID: TOffersGrid[] = [
  { id: 1, title: 'Shoes', image: 'https://picsum.photos/200/255', price: 500 },
  { id: 2, title: 'Beds', image: 'https://picsum.photos/200/256', price: 500 },
];
