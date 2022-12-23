import './goods.scss';
import './utils/imageShow';

import { IGoods } from '../../helpers/item';
import { itemsData } from '../../helpers/item';

export function Goodcart(itemsData: IGoods[]) {
  const idLocal = localStorage.getItem('id');
  const currentProduct = itemsData[Number(idLocal) - 1];
  const cardTitle = document.querySelector('.card-title') as HTMLElement;
  const imgBig = document.querySelector('.card-image-big') as HTMLImageElement;
  const imgSmall1 = document.querySelector('.card-image-small-1') as HTMLImageElement;
  const imgSmall2 = document.querySelector('.card-image-small-2') as HTMLImageElement;
  const cardBrand = document.querySelector('.card-brand-details') as HTMLElement;
  const cardCategory = document.querySelector('.card-category-details') as HTMLElement;
  const cardCost = document.querySelector('.card-cost-details') as HTMLElement;
  const cardQuantity = document.querySelector('.card-quantity-details') as HTMLElement;
  const cardDescription = document.querySelector('.card-description-details') as HTMLElement;
  const storeCategory = document.querySelector('.store-category') as HTMLElement;
  const storeBrand = document.querySelector('.store-brand') as HTMLElement;
  const storeName = document.querySelector('.store-name') as HTMLElement;
  cardTitle.innerText=currentProduct.name;
  imgBig.src=`${currentProduct.image1}`;
  imgSmall1.src=`${currentProduct.image1}`;
  imgSmall2.src=`${currentProduct.image2}`;
  cardBrand.textContent=`${currentProduct.brand}`;
  cardCategory.textContent=`${currentProduct.category}`;
  cardCost.textContent=`${currentProduct.cost}`;
  cardQuantity.textContent=`${currentProduct.warehouse}`;
  storeCategory.textContent=`${currentProduct.category}`;
  storeBrand.textContent=`${currentProduct.brand}`;
  storeName.innerText=currentProduct.name;
}


Goodcart(itemsData);










