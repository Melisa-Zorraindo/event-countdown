export function changeColour(elem, colourSelectorElem, localStorageKey) {
  const hue = colourSelectorElem.value;
  elem.style.backgroundColor = hue;
  localStorage.setItem(localStorageKey, hue);
  localStorage.removeItem("backgroundImage");
  location.reload();
}

export function changeHeadingBgColour(hue) {
  eventTitle.style.backgroundColor = hue;
  localStorage.setItem("headingBgColour", hue);
}

export function changeHeadingFontColour(hue) {
  eventTitle.style.color = hue;
  localStorage.setItem("headingFontColour", hue);
}
