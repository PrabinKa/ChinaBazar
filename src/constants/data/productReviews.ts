// Review Types
export interface ReviewImage {
  id: string;
  uri: string;
}

export interface Review {
  id: string;
  reviewerName: string;
  rating: number;
  date: string;
  text: string;
  images: ReviewImage[];
  colorFamily: string;
  size: string;
  helpfulCount: number;
}

// Media Types
export interface MediaItem {
  id: string;
  uri: string;
}

// Static sample reviews data
export const SAMPLE_REVIEWS: Review[] = [
  {
    id: 'r1',
    reviewerName: 'John Smith',
    rating: 5,
    date: '15 Mar 2026',
    text: 'Absolutely love this product! The quality exceeded my expectations. Fast shipping and the packaging was excellent. Would definitely recommend to anyone looking for a premium product. The color is exactly as shown in the pictures.',
    images: [
      { id: 'i1', uri: 'https://picsum.photos/200/1' },
      { id: 'i2', uri: 'https://picsum.photos/200/2' },
      { id: 'i3', uri: 'https://picsum.photos/200/3' },
      { id: 'i4', uri: 'https://picsum.photos/200/4' },
      { id: 'i5', uri: 'https://picsum.photos/200/5' },
    ],
    colorFamily: 'White',
    size: '38',
    helpfulCount: 24,
  },
  {
    id: 'r2',
    reviewerName: 'Emma Wilson',
    rating: 4,
    date: '10 Mar 2026',
    text: 'Great product overall. The material feels premium and it fits well. Only reason for 4 stars is that the delivery took a bit longer than expected. But the product quality is top notch.',
    images: [
      { id: 'i6', uri: 'https://picsum.photos/200/6' },
      { id: 'i7', uri: 'https://picsum.photos/200/7' },
      { id: 'i8', uri: 'https://picsum.photos/200/8' },
    ],
    colorFamily: 'Black',
    size: '40',
    helpfulCount: 12,
  },
  {
    id: 'r3',
    reviewerName: 'Mike Johnson',
    rating: 5,
    date: '05 Mar 2026',
    text: 'Perfect purchase! This is my second time buying from this brand. Consistently great quality and excellent customer service. The size guide was accurate which helped me choose the right fit.',
    images: [
      { id: 'i9', uri: 'https://picsum.photos/200/9' },
      { id: 'i10', uri: 'https://picsum.photos/200/10' },
      { id: 'i11', uri: 'https://picsum.photos/200/11' },
      { id: 'i12', uri: 'https://picsum.photos/200/12' },
      { id: 'i13', uri: 'https://picsum.photos/200/13' },
      { id: 'i14', uri: 'https://picsum.photos/200/14' },
      { id: 'i15', uri: 'https://picsum.photos/200/15' },
    ],
    colorFamily: 'Blue',
    size: '42',
    helpfulCount: 8,
  },
];

// Static sample photos data
export const SAMPLE_PHOTOS: MediaItem[] = [
  { id: 'p1', uri: 'https://picsum.photos/200/10' },
  { id: 'p2', uri: 'https://picsum.photos/200/20' },
  { id: 'p3', uri: 'https://picsum.photos/200/30' },
  { id: 'p4', uri: 'https://picsum.photos/200/40' },
  { id: 'p5', uri: 'https://picsum.photos/200/50' },
  { id: 'p6', uri: 'https://picsum.photos/200/60' },
  { id: 'p7', uri: 'https://picsum.photos/200/70' },
];

// Static sample videos data
export const SAMPLE_VIDEOS: MediaItem[] = [
  { id: 'v1', uri: 'https://picsum.photos/200/80' },
  { id: 'v2', uri: 'https://picsum.photos/200/90' },
  { id: 'v3', uri: 'https://picsum.photos/200/100' },
  { id: 'v4', uri: 'https://picsum.photos/200/110' },
  { id: 'v5', uri: 'https://picsum.photos/200/120' },
];
