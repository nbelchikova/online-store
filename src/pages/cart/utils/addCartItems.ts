export interface CartItemDetails {
  id: number;
  title: string;
  src: string;
  brand: string;
  category: string;
  cost: number;
  quantity: number;
}

export const addCartItem = (itemDetails: CartItemDetails, quantity: number): void => {
  const productsWrapper = document.querySelector('.products-in-cart') as HTMLElement;
  productsWrapper.insertAdjacentHTML(
    'beforeend',
    `
  <div class="product-wrapper">
        <div class="products-details">
          <div>
            <p class="product-name">${itemDetails.title}</p>
            <p class="product-name">${itemDetails.category}</p>
            <p class="product-price">
            ${itemDetails.cost} руб.
            </p>
          </div>
        </div>
        <div class="product-details">
          <div class="products-counter">
            <button class="square-button">+</button>
            <p>${quantity}</p>
            <button class="square-button">-</button>
          </div>
          <div class="image-wrapper">
            <img class="product-photo" src=${itemDetails.src} alt="Ничего не получилось" />
          </div>
        </div>
      </div>`
  );
};
