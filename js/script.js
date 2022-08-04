import { enableDarkMode, disableDarkMode } from "./settings/themes.js";
import { closeModal } from "./modalPopups/commonFunctions/closeModalBoxes.js";
import { displayBgEditionOptions } from "./modalPopups/background/modalBackground.js";
// import { displayHeadingEditionOptions } from "./modalPopups/headingModal.js";
import { displayCalendar } from "./modalPopups/eventWindow/calendar.js";

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
const eventName = document.querySelector("h1");

eventName.innerHTML = eventTitle || "Event title";

// ---------- STYLE OPTIONS ---------- //

const STYLES_BUTTON = document.querySelector(".background-edition-button");

// ----- Open second navigation bar ----- //
// const modalWindowContainer = document.querySelector("#bg-modal");
const SECOND_NAVBAR = document.querySelector("#second-navigation");

STYLES_BUTTON.addEventListener("click", () => {
  OVERLAY.classList.remove("hidden");
  SECOND_NAVBAR.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

// ----- Close second navigation bar ----- //
const SECOND_NAVBAR_CLOSE_BUTTON = document.querySelector("#sec-nav-close");
SECOND_NAVBAR_CLOSE_BUTTON.addEventListener("click", () => {
  OVERLAY.classList.add("hidden");
  SECOND_NAVBAR.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// ----- Retrieve background colour from local storage if any ----- //
let screenColour = localStorage.getItem("screenColour");
const body = document.querySelector("body");
if (screenColour) {
  updateBgColour(body, screenColour);
}

function updateBgColour(elem, localStorageKey) {
  elem.style.backgroundColor = localStorageKey;
}

// ----- Retrieve background image from local storage if any ----- //
let screenBackgroundImage = localStorage.getItem("backgroundImage");
if (screenBackgroundImage) {
  updateBackgroundImage(screenBackgroundImage);
}

function updateBackgroundImage(localStorageKey) {
  document.body.style.background = `url("${localStorageKey}") center/cover no-repeat`;
}

// ---------- HEADING ---------- //

// ----- Open heading edition window ----- //
/* const headingModal = document.querySelector("#heading-modal");
headlineButton.addEventListener("click", () => {
  OVERLAY.classList.remove("hidden");
  headingModal.classList.remove("hidden");
  displayHeadingEditionOptions(headingModal);
}); */

// ----- Close heading edition window ----- //
const closeModalWindow = document.querySelector("#close-title-edition");
closeModalWindow.addEventListener("click", () => {
  OVERLAY.classList.add("hidden");
  closeModal(headingModal);
});

// ----- Retrieve heading bg colour from local storage if any ----- //
let headingBgColour = localStorage.getItem("headingBgColour");
if (headingBgColour) {
  updateBgColour(eventName, headingBgColour);
}

// ----- Retrieve heading font colour from local storage if any ----- //
let headingFontColour = localStorage.getItem("headingFontColour");
if (headingFontColour) {
  updateFontColour(eventName, headingFontColour);
}

function updateFontColour(elem, localStorageKey) {
  elem.style.color = localStorageKey;
}

// ----- Retrieve heading font from local storage if any ----- //
const eventDays = document.querySelector("#days");
const eventHours = document.querySelector("#hours");
const eventMinutes = document.querySelector("#minutes");
const eventSeconds = document.querySelector("#seconds");

let eventFonts = JSON.parse(localStorage.getItem("fonts"));
if (eventFonts) {
  eventName.style.fontFamily = eventFonts;
  eventDays.style.fontFamily = eventFonts;
  eventHours.style.fontFamily = eventFonts;
  eventMinutes.style.fontFamily = eventFonts;
  eventSeconds.style.fontFamily = eventFonts;
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
    eventName.innerHTML = storedMessage || "The wait is over!";

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
