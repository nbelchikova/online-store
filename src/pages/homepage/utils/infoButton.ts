
import { itemsData } from '../../../helpers/item';

export function infoDetail() : void{
  const btnDetails = document.querySelectorAll<HTMLElement>('.btn.btn-details');
  for (let g = 0; g < btnDetails.length; g++) {
    console.log(1);
    btnDetails[g].addEventListener('click', () => {
      window.location.href='goods.html';
      const cardTitle = document.querySelector('#card-title') as HTMLElement
      const imgBig = document.querySelector('#card-image-big') as HTMLImageElement
      const imgSmall1 = document.querySelector('#card-image-small-1') as HTMLImageElement
      const imgSmall2 = document.querySelector('#card-image-small-2') as HTMLImageElement
      const cardBrand = document.querySelector('#card-brand-details') as HTMLElement
      const cardCategory = document.querySelector('#card-category-details') as HTMLElement
      const cardCost = document.querySelector('#card-cost-details') as HTMLElement
      const cardQuantity = document.querySelector('#card-quantity-details') as HTMLElement
      const cardDescription = document.querySelector('#card-description-details') as HTMLElement
        cardTitle.textContent=`${itemsData[g].name}`
        console.log(cardTitle.textContent)
        imgBig.src=`${itemsData[g].image1}`
        imgSmall1.src=`${itemsData[g].image1}`
        imgSmall2.src=`${itemsData[g].image2}`
        cardBrand.textContent=`${itemsData[g].brand}`
        cardCategory.textContent=`${itemsData[g].category}`
        cardCost.textContent=`${itemsData[g].cost}`
        cardQuantity.textContent=`${itemsData[g].warehouse}`

    });
  }


}





