import { IGoods } from '../../../helpers/item';
import { addProducts, addProductsSmall } from './addProducts';

import { Goodcart } from '../../goods/goods';
const currentUrl = new URLSearchParams(window.location.search);
const viewParam = currentUrl.get('view');
localStorage.setItem('find', String(viewParam));


export function smallSize(items: IGoods[]): void {
  const productsWrapper = document.querySelector('.good-items') as HTMLElement;
  productsWrapper.innerHTML = '';

  items.forEach(({ name, image1 }) => {
    addProductsSmall(name, image1);
  });




}

export function bigSize(items: IGoods[]): void {
  const productsWrapper = document.querySelector('.good-items') as HTMLElement;
  productsWrapper.innerHTML = '';

  items.forEach(({ name, image1, brand, category, cost, warehouse }) => {
    addProducts(name, image1, brand, category, cost, warehouse);
  });



}

