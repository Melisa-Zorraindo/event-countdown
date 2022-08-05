import { displayColourSelector } from "../../commonFunctions/displayColourPicker.js";

const TIMER_EDITION_WINDOW = document.querySelector("#timer-edition-window");

const TIMER_FONT_COLOUR = document.querySelector("#timer-font-colour-picker");
const TIMER_BG = document.querySelector("#timer-bg-colour-picker");

export function displayTimerEditionWindow() {
  //display window
  TIMER_EDITION_WINDOW.classList.remove("hidden");

  //create font colour picker
  TIMER_FONT_COLOUR.innerHTML = "";
  displayColourSelector(
    TIMER_FONT_COLOUR,
    "Select font colour",
    "timer-font-colour-selector"
  );

  //create event bg colour picker
  TIMER_BG.innerHTML = "";
  displayColourSelector(
    TIMER_BG,
    "Select background colour",
    "timer-bg-colour-selector"
  );
}
