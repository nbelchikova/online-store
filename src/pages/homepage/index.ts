import '../../styles/index.scss';
import './index.scss';
import { itemsData } from '../../helpers/item';

const leftArray = document.querySelector('.array-left_img') as HTMLElement | null;
const rightArray = document.querySelector('.array-right_img') as HTMLElement | null;
const imgSlider = document.querySelectorAll<HTMLElement>('.slider_items_img');
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
