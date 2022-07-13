export function switchThemes(darkModeIcon, lightModeIcon, themeLegend) {
  document.body.classList.toggle("dark-mode");
  darkModeIcon.classList.toggle("hidden");
  lightModeIcon.classList.toggle("hidden");
  themeLegend.innerHTML === "light mode"
    ? (themeLegend.innerHTML = "dark mode")
    : (themeLegend.innerHTML = "light mode");
}
