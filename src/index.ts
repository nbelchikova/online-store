import './reset.css';
import './index.css';
import {itemsData} from './item';

let leftArray = document.querySelector('.array-left_img') as HTMLElement | null;
let rightArray = document.querySelector('.array-right_img') as HTMLElement | null;
let imgSlider = document.querySelectorAll<HTMLElement>('.slider_items_img');
let i: number=0;
imgSlider[0].style.display= 'block';

leftArray?.addEventListener('click', () => {
  imgSlider[0].style.display= 'none';
  imgSlider[i].style.display= 'none';
  if (i <= 0) {
    i= imgSlider.length-1;
  } else {
    i= i-1;
  }
  imgSlider[i].style.display= 'block';
});



rightArray?.addEventListener('click', () => {
  imgSlider[0].style.display= 'none';
  imgSlider[i].style.display= 'none';
  if (i>= imgSlider.length-1) {
    i= 0;
  } else {
    i= i+1;
  }
  imgSlider[i].style.display= 'block';
});

