import './goods.scss';

import './utils/imageShow';

import { IGoods } from '../../helpers/item';
import { itemsData } from '../../helpers/item';

export function Goodcart(items: IGoods[]):void {
  const g = localStorage.getItem('id');
  const cardTitle = document.querySelector('.card-title') as HTMLElement
      const imgBig = document.querySelector('.card-image-big') as HTMLImageElement
      const imgSmall1 = document.querySelector('.card-image-small-1') as HTMLImageElement
      const imgSmall2 = document.querySelector('.card-image-small-2') as HTMLImageElement
      const cardBrand = document.querySelector('.card-brand-details') as HTMLElement
      const cardCategory = document.querySelector('.card-category-details') as HTMLElement
      const cardCost = document.querySelector('.card-cost-details') as HTMLElement
      const cardQuantity = document.querySelector('.card-quantity-details') as HTMLElement
      const cardDescription = document.querySelector('.card-description-details') as HTMLElement
      const storeCategory = document.querySelector('.store-category') as HTMLElement
      const storeBrand = document.querySelector('.store-brand') as HTMLElement
      const storeName = document.querySelector('.store-name') as HTMLElement
        console.log(items[Number(g)-1].name)
        cardTitle.innerText=items[Number(g)-1].name
        imgBig.src=`${items[Number(g)-1].image1}`
        imgSmall1.src=`${items[Number(g)-1].image1}`
        imgSmall2.src=`${items[Number(g)-1].image2}`
        cardBrand.textContent=`${items[Number(g)-1].brand}`
        cardCategory.textContent=`${items[Number(g)-1].category}`
        cardCost.textContent=`${items[Number(g)-1].cost}`
        cardQuantity.textContent=`${items[Number(g)-1].warehouse}`
        storeCategory.textContent=`${items[Number(g)-1].category}`
        storeBrand.textContent=`${items[Number(g)-1].brand}`
        storeName.innerText=items[Number(g)-1].name
}


Goodcart(itemsData);










