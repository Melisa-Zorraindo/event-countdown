export function setBackgroundImage(image, localStorageKey) {
  document.body.style.background = `url("${image}") center/cover no-repeat`;
  localStorage.setItem(localStorageKey, image);
  localStorage.removeItem("screenColour");
}
