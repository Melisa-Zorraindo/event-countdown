import { toggleButtonVisibility } from "./buttonVisibility.js";
// ---------- Settings ---------- //
const settingsButton = document.querySelector(".settings-button");
const modalWindow = document.querySelector(".modal-window");
const countdownContainer = document.querySelector(".container");
settingsButton.addEventListener("click", displaySettings);

function displaySettings() {
  modalWindow.classList.toggle("hidden");
  countdownContainer.classList.toggle("hidden");
}

// ----- Button Visibility ----- //
const backgroundButton = document.querySelector(".background-edition-button");
const headlineButton = document.querySelector(".headline-edition-button");
const countDownButton = document.querySelector(".countdown-edition-button");
const buttonDisplay = document.querySelector(".button-visibility-container");
const eyeIcon = document.querySelector("#eye-icon");

let buttons = [backgroundButton, headlineButton, countDownButton];

buttonDisplay.addEventListener("click", () => {
  toggleButtonVisibility(buttons, eyeIcon);
});

// ---------- Countdown logic ---------- //
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
    hoursField.innerHTML = `${hoursLeft}<p>hours</p>`;
    minutesField.innerHTML = `${minutesLeft}<p>minutes</p>`;
    secondsField.innerHTML = `${secondsLeft}<p>seconds</p>`;
  }
}

// setInterval(countDown, 1000);
