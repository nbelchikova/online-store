import { createElement } from '../../../helpers/helpers';
import { IGoods } from '../../../helpers/item';
import { infoDetail, infoDetailSmall } from './infoButton';

const addProductToLocalStorage = (
  element: HTMLElement,
  cartItemDetails: {
    id: number;
    title: string;
    src: string;
    brand: string;
    category: string;
    cost: number;
    quantity: number;
  }
) => {
  element.addEventListener('click', () => {
    const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '') : [];
    const newCartItems = [...cartItems, cartItemDetails];
    localStorage.setItem('cart', JSON.stringify(newCartItems));
  });
};

export const addProducts = (
  id: number,
  title: string,
  src: string,
  brand: string,
  category: string,
  cost: number,
  quantity: number
): void => {
  const productsWrapper = document.querySelector('.good-items') as HTMLElement;
  const productWrapper = createElement('div', productsWrapper, ['good-items-info']);
  createElement('h3', productWrapper, ['info-title'], title);
  const infoColumn = createElement('div', productWrapper, ['info-column']);
  const imageWrapper = createElement('div', infoColumn, ['info-column-image']);

  const image = document.createElement('img');
  image.src = src;
  imageWrapper.appendChild(image);

  const infoColumnDetails = createElement('div', infoColumn, ['info-column-details']);
  createElement('p', infoColumnDetails, ['info-brand'], `Брэнд: ${brand}`);
  createElement('p', infoColumnDetails, ['info-category'], `Категория: ${category}`);
  createElement('p', infoColumnDetails, ['info-cost'], `Цена (в рублях): ${cost}`);
  createElement('p', infoColumnDetails, ['info-quantity'], `Количество на складе: ${quantity}`);

  const infoBtn = createElement('div', productWrapper, ['info-btn']);
  const cartButton = createElement('button', infoBtn, ['btn', 'btn-cart'], 'Добавить в корзину');
  addProductToLocalStorage(cartButton, { id, title, src, brand, category, cost, quantity });
  createElement('button', infoBtn, ['btn', 'btn-details'], 'Информация');
  const productsInfo = document.querySelectorAll<HTMLElement>('.btn.btn-details');

  for (let g = 0; g < productsInfo.length; g++) {
    productsInfo[g].addEventListener('click', infoDetail);
  }
};

export const addProductsSmall = (title: string, src: string): void => {
  const productsWrapper = document.querySelector('.good-items') as HTMLElement;
  const productWrapper = createElement('div', productsWrapper, ['good-items-info2']);
  createElement('h3', productWrapper, ['info-title2'], title);
  const infoColumn = createElement('div', productWrapper, ['info-column2']);
  const imageWrapper = createElement('div', infoColumn, ['info-column-image2']);

  const image = document.createElement('img');
  image.src = src;
  imageWrapper.appendChild(image);

  const infoBtn = createElement('div', productWrapper, ['info-btn-good']);
  createElement('button', infoBtn, ['btn-good', 'btn-cart'], 'Добавить в корзину');
  createElement('button', infoBtn, ['btn-good', 'btn-details'], 'Информация');
  const productsInfo2 = document.querySelectorAll<HTMLElement>('.btn-good.btn-details');

  for (let g = 0; g < productsInfo2.length; g++) {
    productsInfo2[g].addEventListener('click', infoDetailSmall);
  }
};

export const createFilterItem = (
  inputId: string | number,
  filterType: string,
  wrapperSelector: string,
  checked?: boolean,
  possibleItems?: number,
  allItems?: number
): void => {
  const productsWrapper = document.querySelector(wrapperSelector) as HTMLElement;
  const checkFlag = checked ? 'checked' : '';
  productsWrapper.insertAdjacentHTML(
    'beforeend',
    `<div class='filter-item'>
    <label for="${inputId}" id="${inputId}-label">
    <input type="radio" id="${inputId}" name="${filterType}" value="${inputId}" ${checkFlag}>
    ${inputId}</label>
    <p>${possibleItems}/${allItems}</p>
    </div>`
  );
};

export const addFilter = (
  filterType: string,
  filterWrapperClass: string,
  items: IGoods[],
  filterParam: string | null,
  filteredItems: IGoods[]
): void => {
  const filterWrapper = document.querySelector(filterWrapperClass) as HTMLElement;
  filterWrapper.innerHTML = '';

  const filterItems = new Set(items.map(item => item[filterType as keyof IGoods]));

  filterItems.forEach(filterItem => {
    const isChecked = filterItem === filterParam;
    const allItems = items.filter(item => item[filterType as keyof IGoods] === filterItem).length;
    const possibleItems = filteredItems.filter(item => item[filterType as keyof IGoods] === filterItem).length;

    createFilterItem(filterItem, filterType, filterWrapperClass, isChecked, possibleItems, allItems);
  });
};
