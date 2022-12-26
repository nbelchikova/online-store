import { IGoods } from '../../../helpers/item';
const choose = document.querySelector('#choose') as HTMLInputElement;

export function itemSearch(items: IGoods[]): IGoods[] {
  const currentUrl = new URLSearchParams(window.location.search);
  const findParam = currentUrl.get('find');
  let chooseValue=findParam? findParam: '' ;
  choose.value = chooseValue;
  return findParam ? items.filter(item => Object.values(item).some(el => String(el).includes(findParam))) : items;

}
