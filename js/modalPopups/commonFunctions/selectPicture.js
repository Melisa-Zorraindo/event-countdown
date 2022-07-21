export function setBackgroundImage(image, localStorageKey) {
  document.body.style.background = `url("${image}")`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  localStorage.setItem(localStorageKey, image);
}
