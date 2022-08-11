import { changeFontColour } from "../../commonFunctions/selectColours.js";
import { changeBackgroundColour } from "../../commonFunctions/selectColours.js";

const CLOCK = document.querySelector("#timer");

const TIMER_EDITION_WINDOW = document.querySelector("#timer-edition-window");
const OVERLAY = document.querySelector(".overlay");

const TIMER_FONT_COLOUR_PICKER = document.querySelector(
  "#timer-font-colour-selector"
);
const TIMER_BG_COLOUR_PICKER = document.querySelector(
  "#timer-bg-colour-selector"
);

/* ---------- Manage background colour transparency ---------- */
const TIMER_BG_OPACITY_BUTTON = document.querySelector(
  "#timer-bg-opacity-button"
);

let isTimerBgTransparent = false;
let timerBgOpacityTracker = 1;

TIMER_BG_OPACITY_BUTTON.addEventListener("click", () => {
  timerBgOpacityTracker++;
  if (timerBgOpacityTracker % 2 === 0) {
    TIMER_BG_OPACITY_BUTTON.classList.add("transparency-on");
    isTimerBgTransparent = true;
  } else {
    TIMER_BG_OPACITY_BUTTON.classList.remove("transparency-on");
    isTimerBgTransparent = false;
  }
});

/* ---------- Save preferances ---------- */
const TIMER_SAVE_BUTTON = document.querySelector(
  "#save-timer-preferances-button"
);

TIMER_SAVE_BUTTON.addEventListener("click", () => {
  //save timer background colour
  const TIMER_BG_COLOUR = TIMER_BG_COLOUR_PICKER.value;
  !isTimerBgTransparent
    ? changeBackgroundColour(CLOCK, TIMER_BG_COLOUR, "timerBgColour")
    : localStorage.removeItem("timerBgColour");

  //save timer font colour
  const TIMER_FONT_COLOUR = TIMER_FONT_COLOUR_PICKER.value;
  changeFontColour(CLOCK, TIMER_FONT_COLOUR, "timerFontColour");

  //hide modal window
  TIMER_EDITION_WINDOW.classList.add("hidden");
  OVERLAY.classList.add("hidden");
  location.reload();
});

/* ---------- Clear preferances ---------- */
const TIMER_REMOVE_BUTTON = document.querySelector(
  "#remove-timer-preferances-button"
);

TIMER_REMOVE_BUTTON.addEventListener("click", () => {
  //remove font colour
  let timerFontColour = localStorage.getItem("timerFontColour");
  if (timerFontColour) {
    localStorage.removeItem("timerFontColour");
  }
  //remove background colour
  let timerBgColour = localStorage.getItem("timerBgColour");
  if (timerBgColour) {
    localStorage.removeItem("timerBgColour");
  }
  //hide modal window
  TIMER_EDITION_WINDOW.classList.add("hidden");
  OVERLAY.classList.add("hidden");
  location.reload();
});
