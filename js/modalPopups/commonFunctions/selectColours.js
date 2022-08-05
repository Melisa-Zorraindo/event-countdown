/* export function changeScreenBgColour(
  elem,
  colourSelectorElem,
  localStorageKey
) {
  const hue = colourSelectorElem.value;
  elem.style.backgroundColor = hue;
  localStorage.setItem(localStorageKey, hue);
  localStorage.removeItem("backgroundImage");
  location.reload();
} */

/* export function changeHeadingBgColour(hue) {
  eventTitle.style.backgroundColor = hue;
  localStorage.setItem("headingBgColour", hue);
}
 */
/* export function changeHeadingFontColour(hue) {
  eventTitle.style.color = hue;
  localStorage.setItem("headingFontColour", hue);
}
 */
export function updateFontColour(elem, localStorageKey) {
  elem.style.color = localStorageKey;
}

export function updateScreenBgColour(elem, localStorageKey) {
  elem.style.backgroundColor = localStorageKey;
}

/* this is a test */
export function changeBackgroundColour(elem, hue, localStorageKey) {
  elem.style.backgroundColor = hue;
  localStorage.setItem(localStorageKey, hue);
}

/* this is also a test */
export function changeFontColour(elem, hue, localStorageKey) {
  elem.style.color = hue;
  localStorage.setItem(localStorageKey, hue);
}
