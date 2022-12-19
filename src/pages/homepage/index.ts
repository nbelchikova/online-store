import './index.scss';
import { itemsData } from '../../helpers/item';

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
  const arr: number[] = [];
  let arr1: number[] = [];
  let arr2: number[] = [];

  for (let m = 0; m < itemsData.length; m++) {
    arr.push(itemsData[m].cost);
  }

  for (let r = 0; r < goods.length; r++) {
    if (select.value === 'no filter') {
      goods[r].style.order = `${r}`;
    }

    if (select.value === 'asc') {
      arr1 = arr.sort((a, b) => a - b);

      for (let j = 0; j < arr1.length; j++) {
        if (itemsData[r].cost === arr1[j]) {
          goods[r].style.order = `${j}`;
        }
      }
    }

    if (select.value === 'desc') {
      arr2 = arr.sort((a, b) => b - a);

      for (let j = 0; j < arr2.length; j++) {
        if (itemsData[r].cost === arr2[j]) {
          goods[r].style.order = `${j}`;
        }
      }
    }
  }
});
