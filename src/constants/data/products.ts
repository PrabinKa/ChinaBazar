export type ProductVariant = {
  type: string;
  value: string;
};

export type ProductSpecifications = {
  brand: string;
  model: string;
  color: string;
  ram: string;
  storage: string;
  fastCharging: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  categoryId: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  totalReviews: number;
  images: string[];
  description: string;
  highlights: string[];
  specifications: ProductSpecifications;
  variants: ProductVariant[];
  stock: number;
  shippingFee: number;
  deliveryEstimate: string;
  location: string;
  isNew: boolean;
  isTopSale: boolean;
};

export type Products = Product[];

export const PRODUCTS: Products = [
  {
    id: 'p1',
    name: 'Beardo Hair Serum with Argan Oil',
    brand: 'Beardo',
    categoryId: 'c1',
    price: 9999,
    originalPrice: 12999,
    discount: 40,
    rating: 4.2,
    totalReviews: 1000,
    images: ['https://picsum.photos/200/10', 'https://picsum.photos/200/20'],
    description: 'Detailed product description...',
    highlights: ['Fast performance', 'Long battery', 'Noise isolation'],
    specifications: {
      brand: 'Apple',
      model: 'NB121 Pods',
      color: 'Black',
      ram: '8GB',
      storage: '512GB',
      fastCharging: '30W',
    },
    variants: [
      { type: 'storage', value: '64GB' },
      { type: 'storage', value: '256GB' },
      { type: 'storage', value: '512GB' },
    ],
    stock: 20,
    shippingFee: 120,
    deliveryEstimate: '28-30 Nov',
    location: 'Kathmandu',
    isNew: true,
    isTopSale: true,
  },
  {
    id: 'p2',
    name: 'Beardo Hair Serum with Argan Oil',
    brand: 'Beardo',
    categoryId: 'c1',
    price: 9999,
    originalPrice: 12999,
    discount: 40,
    rating: 4.2,
    totalReviews: 1000,
    images: ['https://picsum.photos/200/30', 'https://picsum.photos/200/40'],
    description: 'Detailed product description...',
    highlights: ['Fast performance', 'Long battery', 'Noise isolation'],
    specifications: {
      brand: 'Apple',
      model: 'NB121 Pods',
      color: 'Black',
      ram: '8GB',
      storage: '512GB',
      fastCharging: '30W',
    },
    variants: [
      { type: 'storage', value: '64GB' },
      { type: 'storage', value: '256GB' },
      { type: 'storage', value: '512GB' },
    ],
    stock: 20,
    shippingFee: 120,
    deliveryEstimate: '28-30 Nov',
    location: 'Kathmandu',
    isNew: true,
    isTopSale: true,
  },
  {
    id: 'p3',
    name: 'Beardo Hair Serum with Argan Oil',
    brand: 'Beardo',
    categoryId: 'c1',
    price: 9999,
    originalPrice: 12999,
    discount: 40,
    rating: 4.2,
    totalReviews: 1000,
    images: ['https://picsum.photos/200/50', 'https://picsum.photos/200/60'],
    description: 'Detailed product description...',
    highlights: ['Fast performance', 'Long battery', 'Noise isolation'],
    specifications: {
      brand: 'Apple',
      model: 'NB121 Pods',
      color: 'Black',
      ram: '8GB',
      storage: '512GB',
      fastCharging: '30W',
    },
    variants: [
      { type: 'storage', value: '64GB' },
      { type: 'storage', value: '256GB' },
      { type: 'storage', value: '512GB' },
    ],
    stock: 20,
    shippingFee: 120,
    deliveryEstimate: '28-30 Nov',
    location: 'Kathmandu',
    isNew: true,
    isTopSale: true,
  },
];
