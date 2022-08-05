export function updateFontColour(elem, localStorageKey) {
  elem.style.color = localStorageKey;
}

export function updateScreenBgColour(elem, localStorageKey) {
  elem.style.backgroundColor = localStorageKey;
}

export function changeBackgroundColour(elem, hue, localStorageKey) {
  elem.style.backgroundColor = hue;
  localStorage.setItem(localStorageKey, hue);
}

export function changeFontColour(elem, hue, localStorageKey) {
  elem.style.color = hue;
  localStorage.setItem(localStorageKey, hue);
}
