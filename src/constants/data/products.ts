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
    description:
      'Experience unparalleled audio quality and convenience with the NB121 Pods Wireless Earbuds. Designed for active lifestyles and daily use, these earbuds offer a host of features to enhance your Music listening experience. Extended Playtime: Enjoy up to 40 hours of uninterrupted playtime on a single charge. With a swift Type-C quick charging feature, you\'re always ready to go. NB121 Pods come equipped with a high-performance inbuilt microphone designed to enhance your communication experience.\n\nEnsuring your voice is heard clearly during calls and voice commands. This microphone excels in various environments, whether you are in a busy cafe or a quiet office, providing reliable and crisp audio. Enjoy seamless conversations and voice interactions with a mic that\'s built for precision and clarity. Advanced Noise Isolation.',
    highlights: [
      'A19 Pro Fusion Chip for ultra-fast performance',
      '71" ProMotion XDR Display with peak outdoor brightness',
      'Quad-Lens Pro Camera System with improved low-light capture',
      '48MP UltraZoom Periscope Lens up to 30x optical clarity',
      'All-Day Power with next-gen battery optimization',
      'Satellite+ Connectivity for emergency reach anywhere',
      'MagSafe 3.0 faster wireless charging',
      'On-Device AI Engine for smarter apps and personalization',
      'Water & Dust Resistance IP69 for maximum durability',
    ],
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
      { type: 'storage', value: '1TB' },
      { type: 'storage', value: '2TB' },
      { type: 'storage', value: '5TB' },
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
    description:
      'Experience unparalleled audio quality and convenience with the NB121 Pods Wireless Earbuds. Designed for active lifestyles and daily use, these earbuds offer a host of features to enhance your Music listening experience. Extended Playtime: Enjoy up to 40 hours of uninterrupted playtime on a single charge. With a swift Type-C quick charging feature, you\'re always ready to go. NB121 Pods come equipped with a high-performance inbuilt microphone designed to enhance your communication experience.\n\nEnsuring your voice is heard clearly during calls and voice commands. This microphone excels in various environments, whether you are in a busy cafe or a quiet office, providing reliable and crisp audio. Enjoy seamless conversations and voice interactions with a mic that\'s built for precision and clarity. Advanced Noise Isolation.',
    highlights: [
      'A19 Pro Fusion Chip for ultra-fast performance',
      '71" ProMotion XDR Display with peak outdoor brightness',
      'Quad-Lens Pro Camera System with improved low-light capture',
      '48MP UltraZoom Periscope Lens up to 30x optical clarity',
      'All-Day Power with next-gen battery optimization',
      'Satellite+ Connectivity for emergency reach anywhere',
      'MagSafe 3.0 faster wireless charging',
      'On-Device AI Engine for smarter apps and personalization',
      'Water & Dust Resistance IP69 for maximum durability',
    ],
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
      { type: 'storage', value: '1TB' },
      { type: 'storage', value: '2TB' },
      { type: 'storage', value: '5TB' },
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
    description:
      'Experience unparalleled audio quality and convenience with the NB121 Pods Wireless Earbuds. Designed for active lifestyles and daily use, these earbuds offer a host of features to enhance your Music listening experience. Extended Playtime: Enjoy up to 40 hours of uninterrupted playtime on a single charge. With a swift Type-C quick charging feature, you\'re always ready to go. NB121 Pods come equipped with a high-performance inbuilt microphone designed to enhance your communication experience.\n\nEnsuring your voice is heard clearly during calls and voice commands. This microphone excels in various environments, whether you are in a busy cafe or a quiet office, providing reliable and crisp audio. Enjoy seamless conversations and voice interactions with a mic that\'s built for precision and clarity. Advanced Noise Isolation.',
    highlights: [
      'A19 Pro Fusion Chip for ultra-fast performance',
      '71" ProMotion XDR Display with peak outdoor brightness',
      'Quad-Lens Pro Camera System with improved low-light capture',
      '48MP UltraZoom Periscope Lens up to 30x optical clarity',
      'All-Day Power with next-gen battery optimization',
      'Satellite+ Connectivity for emergency reach anywhere',
      'MagSafe 3.0 faster wireless charging',
      'On-Device AI Engine for smarter apps and personalization',
      'Water & Dust Resistance IP69 for maximum durability',
    ],
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
      { type: 'storage', value: '1TB' },
      { type: 'storage', value: '2TB' },
      { type: 'storage', value: '5TB' },
    ],
    stock: 20,
    shippingFee: 120,
    deliveryEstimate: '28-30 Nov',
    location: 'Kathmandu',
    isNew: true,
    isTopSale: true,
  },
];
