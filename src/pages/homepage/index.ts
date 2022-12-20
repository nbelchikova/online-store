import './index.scss';
import { itemsData, IGoods } from '../../helpers/item';
import { addProducts, addProductsSmall } from './utils/addProducts';

const leftArray = document.querySelector('.array-left-img') as HTMLElement | null;
let arrData: IGoods[] = itemsData;
const choose = document.querySelector('#choose') as HTMLInputElement | null;
const select = document.querySelector('.cost-filter-select') as HTMLInputElement | null;
const rightArray = document.querySelector('.array-right-img') as HTMLElement | null;
const imgSlider = document.querySelectorAll<HTMLElement>('.slider-items-img');
const itemSmall = document.querySelector('.items-quantity-small') as HTMLElement | null;
const itemBig = document.querySelector('.items-quantity-big') as HTMLElement | null;

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
function itemSearch(): void {
  const productsWrapper = document.querySelector('.good-items') as HTMLElement;
  productsWrapper.innerHTML = '';
  let searchArray;

  if (!choose?.value) {
    searchArray = arrData;
  } else {
    const results = [];

    for (let q = 0; q < arrData.length; q++) {
      if (
        arrData[q].name.includes(choose.value) ||
        arrData[q].brand.includes(choose.value) ||
        arrData[q].category.includes(choose.value) ||
        String(arrData[q].cost).includes(choose.value) ||
        String(arrData[q].warehouse).includes(choose.value)
      ) {
        results.push(arrData[q]);
      }
    }

    searchArray = results;
  }

  searchArray.forEach(({ name, image1, brand, category, cost, warehouse }) => {
    addProducts(name, image1, brand, category, cost, warehouse);
  });
  arrData = searchArray;
  select?.addEventListener('change', priceFilter);
  itemBig?.addEventListener('click', bigSize);
  itemSmall?.addEventListener('click', smallSize);
}

choose?.addEventListener('input', itemSearch);

// add filter according cost

function priceFilter(): void {
  const productsWrapper = document.querySelector('.good-items') as HTMLElement;
  productsWrapper.innerHTML = '';

  let filteredArray;

  if (select?.value === 'normal') {
    filteredArray = arrData;
  } else if (select?.value === 'ascWare') {
    filteredArray = [...arrData].sort((a, b) => a.warehouse - b.warehouse);
  } else if (select?.value === 'descWare') {
    filteredArray = [...arrData].sort((a, b) => b.warehouse - a.warehouse);
  } else {
    filteredArray =
      select?.value === 'asc'
        ? [...arrData].sort((a, b) => a.cost - b.cost)
        : [...arrData].sort((a, b) => b.cost - a.cost);
  }

  filteredArray.forEach(({ name, image1, brand, category, cost, warehouse }) => {
    addProducts(name, image1, brand, category, cost, warehouse);
  });
  arrData = filteredArray;
  itemBig?.addEventListener('click', bigSize);
  itemSmall?.addEventListener('click', smallSize);
  choose?.addEventListener('input', itemSearch);
}

select?.addEventListener('change', priceFilter);

// add small or big size

function smallSize(): void {
  const productsWrapper = document.querySelector('.good-items') as HTMLElement;
  productsWrapper.innerHTML = '';

  arrData.forEach(({ name, image1 }) => {
    addProductsSmall(name, image1);
  });
  choose?.addEventListener('input', itemSearch);
}

itemSmall?.addEventListener('click', smallSize);

function bigSize(): void {
  const productsWrapper = document.querySelector('.good-items') as HTMLElement;
  productsWrapper.innerHTML = '';

  arrData.forEach(({ name, image1, brand, category, cost, warehouse }) => {
    addProducts(name, image1, brand, category, cost, warehouse);
  });
  choose?.addEventListener('input', itemSearch);
}

itemBig?.addEventListener('click', bigSize);
