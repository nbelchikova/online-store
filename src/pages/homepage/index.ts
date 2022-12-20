import './index.scss';
import { itemsData } from '../../helpers/item';
import { addProducts } from './utils/addProducts';

const leftArray = document.querySelector('.array-left-img') as HTMLElement | null;

const choose = document.querySelector('#choose') as HTMLInputElement | null;
const select = document.querySelector('.cost-filter-select') as HTMLInputElement | null;
const rightArray = document.querySelector('.array-right-img') as HTMLElement | null;
const imgSlider = document.querySelectorAll<HTMLElement>('.slider-items-img');
const goods = document.querySelectorAll<HTMLElement>('.good-items-info');

// add left slider

let i = 0;
imgSlider[0].style.display = 'block';

leftArray?.addEventListener('click', () => {
  imgSlider[0].style.display = 'none';
  imgSlider[i].style.display = 'none';

  if (i <= 0) {
    i = imgSlider.length - 1;
  } else {
    i -= 1;
  }

  imgSlider[i].style.display = 'block';
});

// add right slider

rightArray?.addEventListener('click', () => {
  imgSlider[0].style.display = 'none';
  imgSlider[i].style.display = 'none';

  if (i >= imgSlider.length - 1) {
    i = 0;
  } else {
    i += 1;
  }

  imgSlider[i].style.display = 'block';
});

// add products

itemsData.forEach(({ name, image1, brand, category, cost, warehouse }) => {
  addProducts(name, image1, brand, category, cost, warehouse);
});

// add search

choose?.addEventListener('input', () => {
  for (let n = 0; n < itemsData.length; n++) {
    if (!itemsData[n].name.includes(choose.value)) {
      goods[n].style.display = 'none';
    }

    if (!choose.value) {
      goods[n].style.display = 'block';
    }
  }
});

// add filter according cost
select?.addEventListener('change', () => {
  const productsWrapper = document.querySelector('.good-items') as HTMLElement;
  productsWrapper.innerHTML = '';

  let filteredArray;

  if (select.value === 'normal') {
    filteredArray = itemsData;
  } else {
    filteredArray =
      select.value === 'asc'
        ? [...itemsData].sort((a, b) => a.cost - b.cost)
        : [...itemsData].sort((a, b) => b.cost - a.cost);
  }

  filteredArray.forEach(({ name, image1, brand, category, cost, warehouse }) => {
    addProducts(name, image1, brand, category, cost, warehouse);
  });
});
