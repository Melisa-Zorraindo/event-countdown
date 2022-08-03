export function enableDarkMode(lightModeIcon, darkModeIcon) {
  document.body.classList.add("dark-mode");
  lightModeIcon.classList.remove("hidden");
  darkModeIcon.classList.add("hidden");
  localStorage.setItem("darkMode", "enabled");
}

export function disableDarkMode(lightModeIcon, darkModeIcon) {
  document.body.classList.remove("dark-mode");
  lightModeIcon.classList.add("hidden");
  darkModeIcon.classList.remove("hidden");
  localStorage.removeItem("darkMode");
}
