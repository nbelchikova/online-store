import './goods.scss';
import './utils/imageShow';
import './utils/card';

import { IGoods, itemsData } from '../../helpers/item';

export function Goodcart(items: IGoods[]) {
  const idLocal = localStorage.getItem('id');
  const currentProduct = items[Number(idLocal) - 1];
  const cardTitle = document.querySelector('.card-title') as HTMLElement;
  const imgBig = document.querySelector('.card-image-big') as HTMLImageElement;
  const imgSmall1 = document.querySelector('.card-image-small-1') as HTMLImageElement;
  const imgSmall2 = document.querySelector('.card-image-small-2') as HTMLImageElement;
  const cardBrand = document.querySelector('.card-brand-details') as HTMLElement;
  const cardCategory = document.querySelector('.card-category-details') as HTMLElement;
  const cardCost = document.querySelector('.card-cost-details') as HTMLElement;
  const cardQuantity = document.querySelector('.card-quantity-details') as HTMLElement;
  const storeCategory = document.querySelector('.store-category') as HTMLElement;
  const storeBrand = document.querySelector('.store-brand') as HTMLElement;
  const storeName = document.querySelector('.store-name') as HTMLElement;
  cardTitle.textContent = currentProduct.name;
  imgBig.src = `${currentProduct.image1}`;
  imgSmall1.src = `${currentProduct.image1}`;
  imgSmall2.src = `${currentProduct.image2}`;
  cardBrand.textContent = `${currentProduct.brand}`;
  cardCategory.textContent = `${currentProduct.category}`;
  cardCost.textContent = `${currentProduct.cost}`;
  cardQuantity.textContent = `${currentProduct.warehouse}`;
  storeCategory.textContent = `${currentProduct.category}`;
  storeBrand.textContent = `${currentProduct.brand}`;
  storeName.innerText = currentProduct.name;
}

Goodcart(itemsData);

export const addToQueryParams2 = (key: string, value: string): void => {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
};

for (let i = 0; i < itemsData.length; i++) {
  addToQueryParams2('good', String(itemsData[i].id));
}

const currentUrl = new URLSearchParams(window.location.search);
const idLocal = currentUrl.get('good');
const currentProduct = itemsData[Number(idLocal) - 1];

export function GoodcartLink(items: IGoods[]) {
  const cardTitle = document.querySelector('.card-title') as HTMLElement;
  const imgBig = document.querySelector('.card-image-big') as HTMLImageElement;
  const imgSmall1 = document.querySelector('.card-image-small-1') as HTMLImageElement;
  const imgSmall2 = document.querySelector('.card-image-small-2') as HTMLImageElement;
  const cardBrand = document.querySelector('.card-brand-details') as HTMLElement;
  const cardCategory = document.querySelector('.card-category-details') as HTMLElement;
  const cardCost = document.querySelector('.card-cost-details') as HTMLElement;
  const cardQuantity = document.querySelector('.card-quantity-details') as HTMLElement;
  const storeCategory = document.querySelector('.store-category') as HTMLElement;
  const storeBrand = document.querySelector('.store-brand') as HTMLElement;
  const storeName = document.querySelector('.store-name') as HTMLElement;
  cardTitle.textContent = currentProduct.name;
  imgBig.src = `${currentProduct.image1}`;
  imgSmall1.src = `${currentProduct.image1}`;
  imgSmall2.src = `${currentProduct.image2}`;
  cardBrand.textContent = `${currentProduct.brand}`;
  cardCategory.textContent = `${currentProduct.category}`;
  cardCost.textContent = `${currentProduct.cost}`;
  cardQuantity.textContent = `${currentProduct.warehouse}`;
  storeCategory.textContent = `${currentProduct.category}`;
  storeBrand.textContent = `${currentProduct.brand}`;
  storeName.innerText = currentProduct.name;
}

GoodcartLink(itemsData);
