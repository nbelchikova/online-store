export const createElement = (
  elementType: string,
  parent: HTMLElement,
  classNames: string[],
  innerHTML?: string
): HTMLElement => {
  const element = document.createElement(elementType);
  parent.appendChild(element);

  if (classNames) {
    element.classList.add(...classNames);
  }

  if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  return element;
};

export const addToQueryParams = (key: string, value: string): void => {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.replaceState(null, '', url);
};
