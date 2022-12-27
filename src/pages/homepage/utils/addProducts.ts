import { createElement } from '../../../helpers/helpers';
import { IGoods } from '../../../helpers/item';

export const addProducts = (
  title: string,
  src: string,
  brand: string,
  category: string,
  cost: number,
  quantity: number,
  parent: HTMLElement
): void => {
  const productWrapper = createElement('div', parent, ['good-items-info']);
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
  createElement('button', infoBtn, ['btn', 'btn-cart'], 'Добавить в корзину');
  createElement('button', infoBtn, ['btn', 'btn-details'], 'Информация');
};

export const addProductsSmall = (title: string, src: string, parent: HTMLElement): void => {
  const productWrapper = createElement('div', parent, ['good-items-info2']);
  createElement('h3', productWrapper, ['info-title2'], title);
  const infoColumn = createElement('div', productWrapper, ['info-column2']);
  const imageWrapper = createElement('div', infoColumn, ['info-column-image2']);

  const image = document.createElement('img');
  image.src = src;
  imageWrapper.appendChild(image);

  const infoBtn = createElement('div', productWrapper, ['info-btn2']);
  createElement('button', infoBtn, ['btn2', 'btn-cart'], 'Добавить в корзину');
  createElement('button', infoBtn, ['btn2', 'btn-details'], 'Информация');
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
