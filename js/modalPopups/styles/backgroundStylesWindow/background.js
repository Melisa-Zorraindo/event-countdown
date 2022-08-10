const BACKGROUND_EDITION_WINDOW = document.querySelector(
  "#background-edition-window"
);

const OVERLAY = document.querySelector(".overlay");
const BACKGROUND_SAVE_BUTTON = document.querySelector(
  "#save-background-preferances-button"
);
const BACKGROUND_REMOVE_BUTTON = document.querySelector(
  "#remove-background-preferances-button"
);

BACKGROUND_SAVE_BUTTON.addEventListener("click", () => {
  //hide modal window
  BACKGROUND_EDITION_WINDOW.classList.add("hidden");
  OVERLAY.classList.add("hidden");
});

BACKGROUND_REMOVE_BUTTON.addEventListener("click", () => {
  //remove background image
  let bgImg = localStorage.getItem("backgroundImage");
  if (bgImg) {
    localStorage.removeItem("backgroundImage");
  }
  //hide modal window
  BACKGROUND_EDITION_WINDOW.classList.add("hidden");
  OVERLAY.classList.add("hidden");
  location.reload();
});
