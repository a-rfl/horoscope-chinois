export const addClass = (el, nameClass) => {
  if (!el.classList.contains(nameClass)) {
    el.classList.add(nameClass);
  }
};

export const removeClass = (el, nameClass) => {
  if (el.classList.contains(nameClass)) {
    el.classList.remove(nameClass);
  }
};
