import { IGoods } from '../../../helpers/item';
const choose = document.querySelector('#choose') as HTMLInputElement;

export function itemSearch(items: IGoods[]): IGoods[] {
  const currentUrl = new URLSearchParams(window.location.search);
  const findParam = currentUrl.get('find');
  localStorage.setItem('find', String(findParam));

  return findParam ? items.filter(item => Object.values(item).some(el => String(el).includes(findParam))) : items;

}
let chooseValue=localStorage.getItem('find')? String(localStorage.getItem('find')): '' ;
choose.value = chooseValue;
