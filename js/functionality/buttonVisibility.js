export function toggleButtonVisibility(buttons, toggleBtn, legend) {
  buttons.forEach((button) => {
    button.classList.toggle("hidden");
  });
  toggleBtn.classList.toggle("fa-eye-slash");
  legend.innerHTML === "display buttons"
    ? (legend.innerHTML = "hide buttons")
    : (legend.innerHTML = "display buttons");
}
