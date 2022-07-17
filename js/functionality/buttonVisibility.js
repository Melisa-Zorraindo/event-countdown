export function hideButtons(buttons, iconOne, iconTwo, legend) {
  buttons.forEach((button) => {
    button.classList.add("hidden");
  });

  // toggleBtn.classList.add("fa-eye-slash");
  iconOne.classList.remove("hidden");
  iconTwo.classList.add("hidden");
  legend.innerHTML = "display buttons";
  localStorage.setItem("buttonVisibility", "invisible");
}

export function displayButtons(buttons, iconOne, iconTwo, legend) {
  buttons.forEach((button) => {
    button.classList.remove("hidden");
  });
  // toggleBtn.classList.remove("fa-eye-slash");
  iconOne.classList.add("hidden");
  iconTwo.classList.remove("hidden");
  legend.innerHTML = "hide buttons";
  localStorage.removeItem("buttonVisibility");
}
