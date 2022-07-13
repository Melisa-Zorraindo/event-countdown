export function toggleButtonVisibility(buttons, toggleBtn) {
  buttons.forEach((button) => {
    button.classList.toggle("hidden");
  });
  toggleBtn.classList.toggle("fa-eye-slash");
}
