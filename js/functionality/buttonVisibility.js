export function hideButtons(buttons, toggleBtn, legend) {
  buttons.forEach((button) => {
    button.classList.add("hidden");
  });
  toggleBtn.classList.add("fa-eye-slash");
  legend.innerHTML = "hide buttons";
  localStorage.setItem("buttonVisibility", "invisible");
}

export function displayButtons(buttons, toggleBtn, legend) {
  buttons.forEach((button) => {
    button.classList.remove("hidden");
  });
  toggleBtn.classList.remove("fa-eye-slash");
  legend.innerHTML = "display buttons";
  localStorage.removeItem("buttonVisibility");
}
