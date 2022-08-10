import { updateFont } from "./fonts.js";
import { changeBackgroundColour } from "../../commonFunctions/selectColours.js";
import { changeFontColour } from "../../commonFunctions/selectColours.js";

const EVENT_NAME = document.querySelector("h1");
const HEADING_SAVE_BUTTON = document.querySelector(
  "#save-heading-preferances-button"
);

const HEADING_EDITION_WINDOW = document.querySelector(
  "#heading-edition-window"
);
const TITLE_FONT_COLOUR_PICKER = document.querySelector(
  "#heading-font-colour-selector"
);
const TITLE_BG_COLOUR_PICKER = document.querySelector(
  "#heading-bg-colour-selector"
);

const OVERLAY = document.querySelector(".overlay");

const FONT = document.querySelector("#font-selection");

HEADING_SAVE_BUTTON.addEventListener("click", () => {
  //save fonts
  updateFont(FONT.value);
  //save heading background colour
  const TITLE_BG_COLOUR = TITLE_BG_COLOUR_PICKER.value;
  changeBackgroundColour(EVENT_NAME, TITLE_BG_COLOUR, "headingBgColour");
  //save font colour
  const TITLE_FONT_COLOUR = TITLE_FONT_COLOUR_PICKER.value;
  changeFontColour(EVENT_NAME, TITLE_FONT_COLOUR, "headingFontColour");
  //hide modal window
  HEADING_EDITION_WINDOW.classList.add("hidden");
  OVERLAY.classList.add("hidden");
});

const HEADING_REMOVE_BUTTON = document.querySelector(
  "#remove-heading-preferances-button"
);

HEADING_REMOVE_BUTTON.addEventListener("click", () => {
  //remove font
  let font = localStorage.getItem("fonts");
  if (font) {
    localStorage.removeItem("fonts");
  }
  //remove font colour
  let headingColour = localStorage.getItem("headingFontColour");
  if (headingColour) {
    localStorage.removeItem("headingFontColour");
  }
  //remove background colour
  let headingBgColour = localStorage.getItem("headingBgColour");
  if (headingBgColour) {
    localStorage.removeItem("headingBgColour");
  }
  //hide modal window
  HEADING_EDITION_WINDOW.classList.add("hidden");
  OVERLAY.classList.add("hidden");
  location.reload();
});
