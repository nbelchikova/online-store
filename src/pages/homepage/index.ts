import './index.scss';
import './utils/index';

import { itemsData } from '../../helpers/item';
import { addFiltersBrands, addFiltersCategories, addProducts, addProductsSmall } from './utils/addProducts';
import { addToQueryParams } from '../../helpers/helpers';
import { itemSort } from './utils/sort';
import { itemSearch } from './utils/search';

const choose = document.querySelector('#choose') as HTMLInputElement | null;
const select = document.querySelector('.cost-filter-select') as HTMLInputElement | null;
const itemSmall = document.querySelector('.items-quantity-small') as HTMLElement;
const itemBig = document.querySelector('.items-quantity-big') as HTMLElement;
const productsWrapper = document.querySelector('.good-items') as HTMLElement;

const renderProducts = () => {
  const currentUrl = new URLSearchParams(window.location.search);
  const viewParam = currentUrl.get('view');
  const sortedItemsArray = itemSort(itemsData);
  const searchedItemsArray = itemSearch(sortedItemsArray);

  productsWrapper.innerHTML = '';


  if (viewParam === 'small') {

    searchedItemsArray.forEach(({ name, image1 }) => {
      addProductsSmall(name, image1);
    });
    itemSmall.classList.add('blueSize');
    itemBig.classList.add('mainSize');
    itemSmall.classList.remove('mainSize');
    itemBig.classList.remove('blueSize');

  } else {
    searchedItemsArray.forEach(({ name, image1, brand, category, cost, warehouse }) => {
      addProducts(name, image1, brand, category, cost, warehouse);
    });
    itemBig.classList.add('blueSize');
    itemSmall.classList.add('mainSize');
    itemSmall.classList.remove('blueSize');
    itemBig.classList.remove('mainSize');

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

  itemSmall.classList.add('blueSize')
  itemBig.classList.add('mainSize')
  itemSmall.classList.remove('mainSize');
  itemBig.classList.remove('blueSize');

});
itemBig?.addEventListener('click', () => {
  addToQueryParams('view', 'big');
  renderProducts();

  itemBig.classList.add('blueSize');
  itemSmall.classList.add('mainSize');
  itemSmall.classList.remove('blueSize');
  itemBig.classList.remove('mainSize');

});

renderProducts();


