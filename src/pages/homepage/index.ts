import './index.scss';

import { itemsData } from '../../helpers/item';
import { addFiltersBrands, addFiltersCategories, addProducts, addProductsSmall } from './utils/addProducts';
import { addToQueryParams } from '../../helpers/helpers';
import { itemSort } from './utils/sort';
import { itemSearch } from './utils/search';
import { initSlider } from './utils/slider';

const choose = document.querySelector('#choose') as HTMLInputElement | null;
const select = document.querySelector('.cost-filter-select') as HTMLInputElement | null;
const itemSmall = document.querySelector('.items-quantity-small') as HTMLElement | null;
const itemBig = document.querySelector('.items-quantity-big') as HTMLElement | null;
const productsWrapper = document.querySelector('.good-items') as HTMLElement;

const renderProducts = () => {
  const currentUrl = new URLSearchParams(window.location.search);
  const viewParam = currentUrl.get('view');
  const sortedItemsArray = itemSort(itemsData);
  const searchedItemsArray = itemSearch(sortedItemsArray);

  productsWrapper.innerHTML = '';

  if (viewParam === 'small') {
    searchedItemsArray.forEach(({ name, image1 }) => {
      addProductsSmall(name, image1, productsWrapper);
    });
  } else {
    searchedItemsArray.forEach(({ name, image1, brand, category, cost, warehouse }) => {
      addProducts(name, image1, brand, category, cost, warehouse, productsWrapper);
    });
  }

  addFiltersCategories(searchedItemsArray);
  addFiltersBrands(searchedItemsArray);
};

choose?.addEventListener('input', e => {
  addToQueryParams('find', (e.target as HTMLInputElement)?.value);
  renderProducts();
});
select?.addEventListener('change', e => {
  addToQueryParams('sort', (e.target as HTMLInputElement)?.value);
  renderProducts();
});
itemSmall?.addEventListener('click', () => {
  addToQueryParams('view', 'small');
  renderProducts();
});
itemBig?.addEventListener('click', () => {
  addToQueryParams('view', 'big');
  renderProducts();
});

initSlider();
renderProducts();
