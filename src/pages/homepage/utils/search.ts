import { IGoods } from '../../../helpers/item';

export function itemSearch(items: IGoods[]): IGoods[] {
  const currentUrl = new URLSearchParams(window.location.search);
  const findParam = currentUrl.get('find');

  return findParam ? items.filter(item => Object.values(item).some(el => String(el).includes(findParam))) : items;
}
