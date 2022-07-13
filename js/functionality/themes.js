export function switchThemes(themeIcons, themeLegend) {
  document.body.classList.toggle("dark-mode");
  themeIcons.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
  themeLegend.innerHTML === "light mode"
    ? (themeLegend.innerHTML = "dark mode")
    : (themeLegend.innerHTML = "light mode");
}
