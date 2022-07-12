export function hideMenu(buttonOne, buttonTwo, navElem, icon) {
  buttonOne.classList.remove("hidden");
  buttonTwo.classList.add("hidden");
  navElem.style.transform = "translateY(-100%)";
  icon.style.transform = "translateY(-100%)";
}

export function displayMenu(buttonOne, buttonTwo, navElem, icon) {
  buttonOne.classList.add("hidden");
  buttonTwo.classList.remove("hidden");
  navElem.style.transform = "translateY(0)";
  icon.style.transform = "translateY(0)";
}
