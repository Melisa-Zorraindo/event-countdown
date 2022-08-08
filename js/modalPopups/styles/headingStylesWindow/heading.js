import { updateFont } from "./fonts.js";

const HEADING_SAVE_BUTTON = document.querySelector(
  "#save-heading-preferances-button"
);

const HEADING_EDITION_WINDOW = document.querySelector(
  "#heading-edition-window"
);
const OVERLAY = document.querySelector(".overlay");

const FONT = document.querySelector("#font-selection");

HEADING_SAVE_BUTTON.addEventListener("click", () => {
  updateFont(FONT.value);
  HEADING_EDITION_WINDOW.classList.add("hidden");
  OVERLAY.classList.add("hidden");
});
