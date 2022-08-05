import { displayColourSelector } from "../../commonFunctions/displayColourPicker.js";

const BG_EDITION_WINDOW = document.querySelector("#background-edition-window");
const BG_COLOUR = document.querySelector("#background-colour-picker");

export function displayBackgroundEditionWindow() {
  //display window
  BG_EDITION_WINDOW.classList.remove("hidden");

  //create bg colour picker
  BG_COLOUR.innerHTML = "";
  displayColourSelector(
    BG_COLOUR,
    "Select background colour",
    "screen-bg-colour-selector"
  );
}
