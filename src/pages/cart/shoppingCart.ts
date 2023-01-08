import './shoppingCart.scss';
import { paginationInit } from './utils/pagination';
import './utils/promo';
import '../goods/utils/card';


paginationInit();

const formes = document.querySelector('.formes') as HTMLElement;
formes.style.display = 'none';
localStorage.getItem('block') ? formes.style.display = 'block' : formes.style.display = 'none';

const orderButton = document.querySelector('.order-button') as HTMLElement;
orderButton.addEventListener('click', ()=> {
  formes.style.display = 'block';
})
