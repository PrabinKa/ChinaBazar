import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import { Tab } from '../../../constants/data/tabs';
import { Product } from '../../../constants/data/products';
import { TabBar } from './TabBar';
import { ProductGrid } from './ProductGrid';

interface ProductsWithTabsProps {
  tabs: Tab[];
  products: Product[];
}

export const ProductsWithTabs: React.FC<ProductsWithTabsProps> = ({
  tabs,
  products,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0].id);

  const activeTab = useMemo(() => {
    return tabs.find((t) => t.id === activeTabId);
  }, [activeTabId, tabs]);

  const filteredProducts = useMemo(() => {
    if (!activeTab || activeTab.categoryId === null) {
      return products;
    }
    return products.filter(
      (product) => product.categoryId === activeTab.categoryId
    );
  }, [activeTab, products]);

  return (
    <View>
      <TabBar
        tabs={tabs}
        activeTabId={activeTabId}
        onTabPress={(tab) => setActiveTabId(tab.id)}
      />
      <ProductGrid products={filteredProducts} />
    </View>
  );
};