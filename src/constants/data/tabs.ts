export type Tab = {
  id: string;
  label: string;
  icon?: string;
  badge?: string;
  badgeColor?: string;
  categoryId: string | null;
};

export const TABS: Tab[] = [
  { id: 't1', label: 'Best Deals', icon: 'pricetag-outline', categoryId: null },
  { id: 't2', label: 'New Arrivals', icon: 'sparkles-outline', badge: 'New', badgeColor: '#4CAF50', categoryId: 'c2' },
  { id: 't3', label: 'Sports Outdoor', icon: 'bicycle-outline', categoryId: 'c3' },
  { id: 't4', label: 'Electronics', icon: 'phone-portrait-outline', categoryId: 'c1' },
  { id: 't5', label: 'Fashion', icon: 'shirt-outline', categoryId: 'c4' },
];