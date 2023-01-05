import { addCartItem } from './addCartItems';
import { getItemsFromStorage } from './getItemsFromStorage';

const totalSum = document.querySelector('.total-price') as HTMLElement;
const totalQuantity = document.querySelector('.total-quantity') as HTMLElement;

export const renderCartItems = (firstItem: number, lastItem: number): void => {
  const itemsWithQuantity = getItemsFromStorage();
  const itemsForRender = itemsWithQuantity.slice(firstItem - 1, lastItem);

  itemsForRender.forEach(([itemDetails, quantity]) => {
    if (itemDetails) {
      addCartItem(itemDetails, quantity);
    }
  });

  const total = itemsWithQuantity.reduce((sum, [itemDetails, quantity]) => {
    if (itemDetails?.cost) {
      return sum + itemDetails?.cost * quantity;
    }

    return sum;
  }, 0);

  const totalQuantitySum = itemsWithQuantity.reduce((sum, [_, quantity]) => {
    return sum + quantity;
  }, 0);

  totalSum.innerHTML = `${total} руб.`;
  totalQuantity.innerHTML = `${totalQuantitySum} шт.`;
};
