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
