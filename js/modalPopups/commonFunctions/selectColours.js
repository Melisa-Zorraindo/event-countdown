export function changeColour(elem, colourSelectorElem, localStorageKey) {
  const hue = colourSelectorElem.value;
  elem.style.backgroundColor = hue;
  localStorage.setItem(localStorageKey, hue);
}
