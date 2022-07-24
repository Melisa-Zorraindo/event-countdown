import {
  hideButtons,
  displayButtons,
} from "./functionality/buttonVisibility.js";
import { enableDarkMode, disableDarkMode } from "./functionality/themes.js";
import { closeModal } from "./modalPopups/commonFunctions/closeModalBoxes.js";
import { displayBgEditionOptions } from "./modalPopups/modalBackground.js";
import { displayHeadingEditionOptions } from "./modalPopups/headingModal.js";

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
const overylay = document.querySelector(".overlay");
const modalWindowContainer = document.querySelector("#bg-modal");
bgEditBtn.addEventListener("click", () => {
  overylay.classList.remove("hidden");
  modalWindowContainer.classList.remove("hidden");
  displayBgEditionOptions(modalWindowContainer);
});

//close//
const closeBtn = document.querySelector("#close-bg-modal");
closeBtn.addEventListener("click", () => {
  overylay.classList.add("hidden");
  closeModal(modalWindowContainer);
});

// ----- Retrieve background colour from to local storage if any ----- //
let screenColour = localStorage.getItem("screenColour");
const body = document.querySelector("body");
if (screenColour) {
  updateBgColour(body, screenColour);
}

function updateBgColour(elem, localStorageKey) {
  elem.style.backgroundColor = localStorageKey;
}

// ----- Retrieve background image from to local storage if any ----- //
let screenBackgroundImage = localStorage.getItem("backgroundImage");
if (screenBackgroundImage) {
  updateBackgroundImage(screenBackgroundImage);
}

function updateBackgroundImage(localStorageKey) {
  document.body.style.background = `url("${localStorageKey}") center/cover no-repeat`;
}

// ---------- SET HEADING ---------- //

// ----- Open heading edition window ----- //
const headingModal = document.querySelector("#heading-modal");
headlineButton.addEventListener("click", () => {
  overylay.classList.remove("hidden");
  headingModal.classList.remove("hidden");
  displayHeadingEditionOptions(headingModal);
});

//close//
const closeModalWindow = document.querySelector("#close-title-edition");
closeModalWindow.addEventListener("click", () => {
  overylay.classList.add("hidden");
  closeModal(headingModal);
});

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

setInterval(countDown, 1000);
