export function enableDarkMode(lightModeIcon, darkModeIcon, themeLegend) {
  document.body.classList.add("dark-mode");
  lightModeIcon.classList.remove("hidden");
  darkModeIcon.classList.add("hidden");
  themeLegend.innerHTML = "light mode";
  localStorage.setItem("darkMode", "enabled");
}

export function disableDarkMode(lightModeIcon, darkModeIcon, themeLegend) {
  document.body.classList.remove("dark-mode");
  lightModeIcon.classList.add("hidden");
  darkModeIcon.classList.remove("hidden");
  themeLegend.innerHTML = "dark mode";
  localStorage.removeItem("darkMode");
}
