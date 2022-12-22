import { IGoods } from '../../../helpers/item';
import { Goodcart } from '../../goods/goods';
const select = document.querySelector('.cost-filter-select') as HTMLInputElement;

const orders = {
  ascWare: (a: IGoods, b: IGoods) => a.warehouse - b.warehouse,
  descWare: (a: IGoods, b: IGoods) => b.warehouse - a.warehouse,
  asc: (a: IGoods, b: IGoods) => a.cost - b.cost,
  desc: (a: IGoods, b: IGoods) => b.cost - a.cost,
};

export type SortOrder = keyof typeof orders | 'normal';

export function itemSort(items: IGoods[]): IGoods[] {
  const currentUrl = new URLSearchParams(window.location.search);
  const sortParam = currentUrl.get('sort') as SortOrder | null;

  if (!sortParam || sortParam === 'normal' || !(sortParam in orders)) {
    return items;
  }

  localStorage.setItem('sort', String(sortParam));
  return [...items].sort(orders[sortParam]);

}
let sortValue=localStorage.getItem('sort')? String(localStorage.getItem('sort')): 'normal' ;
select.value = sortValue;
