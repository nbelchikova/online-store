import { IGoods } from '../../../helpers/item';

import { Goodcart } from '../../goods/goods';


export function itemFilter(items: IGoods[]): IGoods[] {
  let filteredItems = items;
  const currentUrl = new URLSearchParams(window.location.search);
  const categoryParam = currentUrl.get('category');
  const brandParam = currentUrl.get('brand');
  const [minPrice, maxPrice] = currentUrl.get('price')?.split('-') || [];
  const [minStock, maxStock] = currentUrl.get('stock')?.split('-') || [];

  if (categoryParam) {
    filteredItems = items.filter(item => item.category === categoryParam);
  }

  if (brandParam) {
    filteredItems = items.filter(item => item.brand === brandParam);
  }

  if (minPrice) {
    filteredItems = items.filter(item => item.cost >= +minPrice || item.cost <= +maxPrice);
  }

  if (minStock) {
    filteredItems = items.filter(item => item.warehouse >= +minStock || item.warehouse <= +maxStock);
  }

  return filteredItems;
}
