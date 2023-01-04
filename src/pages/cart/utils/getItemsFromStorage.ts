import { CartItemDetails } from './addCartItems';

const itemsInCart: CartItemDetails[] = JSON.parse(localStorage.getItem('cart') || '') || [];

export const getItemsFromStorage = (): [CartItemDetails | undefined, number][] => {
  const numberOfItems = itemsInCart.reduce<Record<number, number>>((acc, curr) => {
    return acc[curr.id] ? { ...acc, [curr.id]: acc[curr.id] + 1 } : { ...acc, [curr.id]: 1 };
  }, {});

  return Object.entries(numberOfItems).map(([id, quantity]) => {
    const itemDetails = itemsInCart.find(item => item.id === +id);

    return [itemDetails, quantity];
  });
};
