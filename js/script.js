import { enableDarkMode, disableDarkMode } from "./settings/themes.js";
import { closeModal } from "./modalPopups/commonFunctions/closeModalBoxes.js";
import { displayCalendar } from "./modalPopups/eventWindow/calendar.js";
import { displayTitleEditionWindow } from "./modalPopups/styles/headingStylesWindow/titleEditionWindow.js";
import { updateFontColour } from "./modalPopups/commonFunctions/selectColours.js";
import { updateScreenBgColour } from "./modalPopups/commonFunctions/selectColours.js";
import { displayTimerEditionWindow } from "./modalPopups/styles/countdownStylesWindow/timerEditionWindow.js";
import { displayBackgroundEditionWindow } from "./modalPopups/styles/backgroundStylesWindow/backgroundEditionWindow.js";
import { updateBackgroundImage } from "./modalPopups/styles/backgroundStylesWindow/backgroundEditionWindow.js";

// ---------- SET THEME ---------- //
const modeContainer = document.querySelector("#themes-button");
const darkModeIcon = document.querySelector(".fa-moon");
const lightModeIcon = document.querySelector(".fa-sun");

// ----- Save theme to local storage ----- //
let darkMode = localStorage.getItem("darkMode");
if (darkMode === "enabled") {
  enableDarkMode(lightModeIcon, darkModeIcon);
}

// ----- Switch themes ----- //
modeContainer.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled"
    ? enableDarkMode(lightModeIcon, darkModeIcon)
    : disableDarkMode(lightModeIcon, darkModeIcon);
});

// ---------- EDIT EVENT ---------- //
const eventEditionButton = document.querySelector("#timer-edition-button");
const calendarModal = document.querySelector("#event-edition-window");
const closeCalendar = document.querySelector("#close-event-edition-window");

const OVERLAY = document.querySelector(".overlay");

// ----- Open event edition modal ----- //
eventEditionButton.addEventListener("click", () => {
  OVERLAY.classList.remove("hidden");
  calendarModal.classList.remove("hidden");
  displayCalendar();
});

// ----- Close event edition modal ----- //
closeCalendar.addEventListener("click", () => {
  OVERLAY.classList.add("hidden");
  closeModal(calendarModal);
});

// ----- Retrieve event title local storage if any ----- //
let eventTitle = localStorage.getItem("eventTitle");
const EVENT_NAME = document.querySelector("h1");

EVENT_NAME.innerHTML = eventTitle || "Event title";

// ---------- STYLE OPTIONS ---------- //

const STYLES_BUTTON = document.querySelector(".background-edition-button");

// ----- Open second navigation bar ----- //
const SECOND_NAVBAR = document.querySelector("#second-navigation");

STYLES_BUTTON.addEventListener("click", () => {
  OVERLAY.classList.remove("hidden");
  SECOND_NAVBAR.classList.remove("hidden");
});

// ----- Close second navigation bar ----- //
const SECOND_NAVBAR_CLOSE_BUTTON = document.querySelector("#sec-nav-close");
SECOND_NAVBAR_CLOSE_BUTTON.addEventListener("click", () => {
  OVERLAY.classList.add("hidden");
  SECOND_NAVBAR.classList.add("hidden");
});

// ----- Open title edition window ----- //
const EDIT_TITLE_BUTTON = document.querySelector("#edit-title-styles");

EDIT_TITLE_BUTTON.addEventListener("click", () => {
  SECOND_NAVBAR.classList.add("hidden");
  displayTitleEditionWindow();
});

// ----- Close title edition window ----- //
const HEADING_EDITION_WINDOW = document.querySelector(
  "#heading-edition-window"
);
const HEADING_EDITION_WINDOW_CLOSE_BUTTON = document.querySelector(
  "#close-heading-edition-window"
);
HEADING_EDITION_WINDOW_CLOSE_BUTTON.addEventListener("click", () => {
  OVERLAY.classList.add("hidden");
  closeModal(HEADING_EDITION_WINDOW);
});

// ----- Retrieve heading bg colour from local storage if any ----- //
const HEADING_BG_COLOUR = localStorage.getItem("headingBgColour");

if (HEADING_BG_COLOUR) {
  updateScreenBgColour(EVENT_NAME, HEADING_BG_COLOUR);
}

// ----- Retrieve heading font colour from local storage if any ----- //
const HEADING_FONT_COLOUR = localStorage.getItem("headingFontColour");

if (HEADING_FONT_COLOUR) {
  updateFontColour(EVENT_NAME, HEADING_FONT_COLOUR);
}

// ----- Retrieve heading font from local storage if any ----- //
const eventDays = document.querySelector("#days");
const eventHours = document.querySelector("#hours");
const eventMinutes = document.querySelector("#minutes");
const eventSeconds = document.querySelector("#seconds");

let eventFonts = JSON.parse(localStorage.getItem("fonts"));
if (eventFonts) {
  EVENT_NAME.style.fontFamily = eventFonts;
  eventDays.style.fontFamily = eventFonts;
  eventHours.style.fontFamily = eventFonts;
  eventMinutes.style.fontFamily = eventFonts;
  eventSeconds.style.fontFamily = eventFonts;
}

// ----- Open timer edition window ----- //
const EDIT_TIMER_BUTTON = document.querySelector("#edit-timer-styles");
const TIMER_EDITION_WINDOW = document.querySelector("#timer-edition-window");

EDIT_TIMER_BUTTON.addEventListener("click", () => {
  SECOND_NAVBAR.classList.add("hidden");
  displayTimerEditionWindow();
});

// ----- Close timer edition window ----- //
const TIMER_EDITION_WINDOW_CLOSE_BUTTON = document.querySelector(
  "#close-timer-edition-window"
);

TIMER_EDITION_WINDOW_CLOSE_BUTTON.addEventListener("click", () => {
  OVERLAY.classList.add("hidden");
  closeModal(TIMER_EDITION_WINDOW);
});

// ----- Retrieve timer bg colour from local storage if any ----- //
const CLOCK = document.querySelector("#timer");
const TIMER_BG_COLOUR = localStorage.getItem("timerBgColour");

if (TIMER_BG_COLOUR) {
  updateScreenBgColour(CLOCK, TIMER_BG_COLOUR);
}

// ----- Retrieve timer font colour from local storage if any ----- //
const TIMER_FONT_COLOUR = localStorage.getItem("timerFontColour");

if (TIMER_FONT_COLOUR) {
  updateFontColour(CLOCK, TIMER_FONT_COLOUR);
}

// ----- Open background edition window ----- //
const EDIT_BG_BUTTON = document.querySelector("#edit-bg-styles");
const BG_EDITION_WINDOW = document.querySelector("#background-edition-window");

EDIT_BG_BUTTON.addEventListener("click", () => {
  SECOND_NAVBAR.classList.add("hidden");
  displayBackgroundEditionWindow();
});

// ----- Close background edition window ----- //
const BG_EDITION_WINDOW_CLOSE_BUTTON = document.querySelector(
  "#close-background-edition-window"
);

BG_EDITION_WINDOW_CLOSE_BUTTON.addEventListener("click", () => {
  OVERLAY.classList.add("hidden");
  closeModal(BG_EDITION_WINDOW);
});

// ----- Retrieve background colour from local storage if any ----- //
let screenColour = localStorage.getItem("screenColour");
const BODY = document.querySelector("body");
if (screenColour) {
  updateScreenBgColour(BODY, screenColour);
}

// ----- Retrieve background image from local storage if any ----- //
let screenBackgroundImage = localStorage.getItem("backgroundImage");
if (screenBackgroundImage) {
  updateBackgroundImage(screenBackgroundImage);
}

// ---------- COUNTDOWN LOGIC ---------- //
const arrivalDate = new Date("09/28/2022");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countDown() {
  let today = new Date();
  let timeSpan = arrivalDate - today;

  if (timeSpan <= 0) {
    // ----- Retrieve final message from local storage if any ----- //
    let storedMessage = localStorage.getItem("finalMessage");
    EVENT_NAME.innerHTML = storedMessage || "The wait is over!";

    // ----- Clear timer ----- //
    const counter = document.querySelector(".timer");
    counter.innerHTML = " ";
  } else {
    const daysField = document.querySelector("#days");
    const hoursField = document.querySelector("#hours");
    const minutesField = document.querySelector("#minutes");
    const secondsField = document.querySelector("#seconds");
    const daysLeft = Math.floor(timeSpan / day);
    const hoursLeft = Math.floor((timeSpan % day) / hour);
    const minutesLeft = Math.floor((timeSpan % hour) / minute);
    const secondsLeft = Math.floor((timeSpan % minute) / second);
    daysField.innerHTML = `${daysLeft}<p>days</p>`;
    hoursField.innerHTML =
      hoursLeft < 10 ? `0${hoursLeft}<p>hours</p>` : `${hoursLeft}<p>hours</p>`;
    minutesField.innerHTML =
      minutesLeft < 10
        ? `0${minutesLeft}<p>minutes</p>`
        : `${minutesLeft}<p>minutes</p>`;
    secondsField.innerHTML =
      secondsLeft < 10
        ? `0${secondsLeft}<p>seconds</p>`
        : `${secondsLeft}<p>seconds</p>`;
  }
}

setInterval(countDown, 1000);
