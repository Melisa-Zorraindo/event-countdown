import { changeFontColour } from "../../commonFunctions/selectColours.js";
import { changeBackgroundColour } from "../../commonFunctions/selectColours.js";

const TIMER_SAVE_BUTTON = document.querySelector(
  "#save-timer-preferances-button"
);

const CLOCK = document.querySelector("#timer");

const TIMER_EDITION_WINDOW = document.querySelector("#timer-edition-window");
const OVERLAY = document.querySelector(".overlay");

const TIMER_FONT_COLOUR_PICKER = document.querySelector(
  "#timer-font-colour-selector"
);
const TIMER_BG_COLOUR_PICKER = document.querySelector(
  "#timer-bg-colour-selector"
);

TIMER_SAVE_BUTTON.addEventListener("click", () => {
  //save heading background colour
  const TIMER_BG_COLOUR = TIMER_BG_COLOUR_PICKER.value;
  changeBackgroundColour(CLOCK, TIMER_BG_COLOUR, "timerBgColour");
  //save font colour
  const TIMER_FONT_COLOUR = TIMER_FONT_COLOUR_PICKER.value;
  changeFontColour(CLOCK, TIMER_FONT_COLOUR, "timerFontColour");
  //hide modal window
  TIMER_EDITION_WINDOW.classList.add("hidden");
  OVERLAY.classList.add("hidden");
});
