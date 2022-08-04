import { displayColourSelector } from "../../commonFunctions/displayColourPicker.js";
import { updateFont } from "./fonts.js";

const HEADING_EDITION_WINDOW = document.querySelector(
  "#heading-edition-window"
);

const HEADING_BG = document.querySelector("#bg-colour-event-name-picker");
const HEADING_FONT_COLOUR = document.querySelector(
  "#font-colour-event-name-picker"
);

export function displayTitleEditionWindow() {
  //display window
  HEADING_EDITION_WINDOW.classList.remove("hidden");

  //create font colour picker
  HEADING_FONT_COLOUR.innerHTML = "";
  displayColourSelector(
    HEADING_FONT_COLOUR,
    "Select font colour",
    "font-colour-selector"
  );

  //create event bg colour picker
  HEADING_BG.innerHTML = "";
  displayColourSelector(
    HEADING_BG,
    "Select background colour",
    "bg-colour-selector"
  );
}

const FONT = document.querySelector("#font-selection");

FONT.addEventListener("change", () => {
  updateFont(FONT.value);
});
