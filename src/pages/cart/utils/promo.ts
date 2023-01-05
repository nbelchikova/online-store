const promoInput = document.querySelector('#promo-input') as HTMLInputElement;
const promoInfo = document.querySelector('.promo-info') as HTMLElement;
const formesPromo = document.querySelector('.promo-form') as HTMLElement;
const totalPrice = document.querySelector('.total-price') as HTMLElement;
const discountPrice = document.querySelector('.discount-price') as HTMLElement;
const promoApply = document.querySelector('#promo-apply') as HTMLElement;

const promo = function () {
  if (promoInput.value === 'promo1' || promoInput.value === 'promo2' || promoInput.value === 'promo3') {
    promoInfo.textContent = `${promoInput.value}. Скидка 10%`;
  }
};

promoInput.addEventListener('input', promo, false);

function discount() {
  const pApply = document.querySelectorAll<HTMLElement>('#promo-apply p');

  if (pApply.length === 1) {
    console.log(pApply.length);
    discountPrice.textContent = `${Number(totalPrice.textContent?.split(' ')[0]) * 0.9} руб`;
    totalPrice.classList.add('price-discount');
  } else if (pApply.length === 2) {
    console.log(pApply.length);
    discountPrice.textContent = `${Number(totalPrice.textContent?.split(' ')[0]) * 0.8} руб`;
    totalPrice.classList.add('price-discount');
  } else if (pApply.length === 3) {
    console.log(pApply.length);
    discountPrice.textContent = `${Number(totalPrice.textContent?.split(' ')[0]) * 0.7} руб`;
    totalPrice.classList.add('price-discount');
  } else if (pApply.length === 0) {
    console.log(pApply.length);
    discountPrice.textContent = `${totalPrice.textContent}`;
    totalPrice.classList.remove('price-discount');
  }
}

function deletePromo() {
  const pApply = document.querySelectorAll<HTMLElement>('#promo-apply p');

  for (let m = 0; m < pApply.length; m++) {
    pApply[m].addEventListener('click', () => {
      pApply[m].remove();
      discount();
    });
  }
}

function appendPromo() {
  const pApply = document.querySelectorAll<HTMLElement>('#promo-apply p');

  if (promoInput.value === 'promo1' || promoInput.value === 'promo2' || promoInput.value === 'promo3') {
    if (pApply.length === 0) {
      const pPromo = document.createElement('p');
      promoApply.append(pPromo);
      pPromo.textContent = `-${promoInput.value}. Скидка 10% (Удалить)`;
      discount();
      deletePromo();
    } else {
      for (let k = 0; k < pApply.length; k++) {
        if (pApply[k].textContent === `-${promoInput.value}. Скидка 10% (Удалить)`) {
          return false;
        }
      }
      const pPromo = document.createElement('p');
      promoApply.append(pPromo);
      pPromo.textContent = `-${promoInput.value}. Скидка 10% (Удалить)`;
      discount();
      deletePromo();
    }
    return true;
  }
}

const applyPromo = function (event: SubmitEvent) {
  event.preventDefault();
  appendPromo();
};

formesPromo.addEventListener('submit', applyPromo, false);
