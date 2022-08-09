const BACKGROUND_EDITION_WINDOW = document.querySelector(
  "#background-edition-window"
);

const OVERLAY = document.querySelector(".overlay");
const BACKGROUND_SAVE_BUTTON = document.querySelector(
  "#save-background-preferances-button"
);

BACKGROUND_SAVE_BUTTON.addEventListener("click", () => {
  //hide modal window
  BACKGROUND_EDITION_WINDOW.classList.add("hidden");
  OVERLAY.classList.add("hidden");
});
