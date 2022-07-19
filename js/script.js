import {
  hideButtons,
  displayButtons,
} from "./functionality/buttonVisibility.js";
import { enableDarkMode, disableDarkMode } from "./functionality/themes.js";
import { displayBgEditionOptions } from "./modalPopups/modalBackground.js";

// ---------- SETTINGS ---------- //
const settingsButton = document.querySelector(".settings-button");
const modalWindow = document.querySelector(".settings-menu");
const countdownContainer = document.querySelector(".container");
settingsButton.addEventListener("click", displaySettings);

function displaySettings() {
  modalWindow.classList.toggle("hidden");
  countdownContainer.classList.toggle("hidden");
}

// ----- Themes ----- //
const modeContainer = document.querySelector(".mode-container");
const darkModeIcon = document.querySelector(".fa-moon");
const lightModeIcon = document.querySelector(".fa-sun");
let themeLegend = document.querySelector("#theme-para");

/* Save theme to local storage */
let darkMode = localStorage.getItem("darkMode");
if (darkMode === "enabled") {
  enableDarkMode(lightModeIcon, darkModeIcon, themeLegend);
}

/* Switch themes */
modeContainer.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled"
    ? enableDarkMode(lightModeIcon, darkModeIcon, themeLegend)
    : disableDarkMode(lightModeIcon, darkModeIcon, themeLegend);
});

// ----- Button Visibility ----- //
const bgEditBtn = document.querySelector(".background-edition-button");
const headlineButton = document.querySelector(".headline-edition-button");
const countDownButton = document.querySelector(".countdown-edition-button");
const buttonDisplay = document.querySelector(".button-visibility-container");
let buttons = [bgEditBtn, headlineButton, countDownButton];
const eyeIcon = document.querySelector("#eye-icon");
const eyeSlashIcon = document.querySelector("#eye-slash-icon");
const legend = document.querySelector("#visibility-para");

/*Save preferance to local storage*/
let buttonVisibility = localStorage.getItem("buttonVisibility");
if (buttonVisibility === "invisible") {
  hideButtons(buttons, eyeIcon, eyeSlashIcon, legend);
}

/*Toggle button visibility*/
buttonDisplay.addEventListener("click", () => {
  if (buttonVisibility !== "invisible") {
    hideButtons(buttons, eyeIcon, eyeSlashIcon, legend);
    location.reload();
  } else {
    displayButtons(buttons, eyeIcon, eyeSlashIcon, legend);
    location.reload();
  }
});

// ---------- SET SCREEN BACKGROUND ---------- //

// ----- Open background edition window ----- //
const modalWindowContainer = document.querySelector("#modals");
bgEditBtn.addEventListener("click", () => {
  displayBgEditionOptions(modalWindowContainer);
});

// ----- Retrieve background colour from to local storage ----- //
let screenBg = localStorage.getItem("screenBg");
const body = document.querySelector("body");
if (screenBg) {
  updateBgColour(body, screenBg);
}

function updateBgColour(elem, localStorageKey) {
  elem.style.backgroundColor = localStorageKey;
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
    const counter = document.querySelector(".timer");
    counter.innerHTML = " ";
    counter.innerHTML = "Happy Holidays!";
    counter.style.padding = "1rem 3rem";
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

// setInterval(countDown, 1000);
