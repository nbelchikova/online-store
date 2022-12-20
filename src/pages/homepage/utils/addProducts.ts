import { createElement } from '../../../helpers/helpers';

export const addProducts = (
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
  createElement('button', infoBtn, ['btn', 'btn-cart'], 'Добавить в корзину');
  createElement('button', infoBtn, ['btn', 'btn-details'], 'Информация');
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

  const infoBtn = createElement('div', productWrapper, ['info-btn2']);
  createElement('button', infoBtn, ['btn2', 'btn-cart'], 'Добавить в корзину');
  createElement('button', infoBtn, ['btn2', 'btn-details'], 'Информация');
};

