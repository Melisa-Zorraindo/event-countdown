let nav = 0;
let arrivalDate;

const weekdays = ["M", "T", "W", "T", "F", "S", "S"];

const calendar = document.querySelector("#calendar");

export function displayCalendar() {
  const dt = new Date();

  //if bug found in september/october try this:
  // nav changes when back and next buttons clicked
  /*   if (nav !== 0) {

    // Set date to first day of month
    dt = new Date(`${month + 1}/01/${year}`);

    // Add or subtract one month, depending on button clicked
    dt.setMonth(dt.getMonth() + nav);

    // set month and year to updated dt
    month = dt.getMonth();
    year = dt.getFullYear();
  } */

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDay = new Date(year, month, 1);

  //get number of days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  //find offset days to render empty squares
  const dateString = firstDay.toLocaleDateString("en-US", {
    weekday: "narrow",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const inactiveDays = weekdays.indexOf(dateString.split(", ")[0]);

  //render month and year
  const calendarHeader = document.querySelector("#month-display");
  calendarHeader.innerHTML = `${dt.toLocaleDateString("en-US", {
    month: "long",
  })} ${year}`;

  //clear calendar container to avoid piling up months
  calendar.innerHTML = "";

  //render calendar contents
  for (let i = 1; i <= inactiveDays + daysInMonth; i++) {
    const DAY_SQUARE = document.createElement("div");
    DAY_SQUARE.classList.add("day");

    i > inactiveDays
      ? (DAY_SQUARE.innerHTML = i - inactiveDays)
      : DAY_SQUARE.classList.add("inactive");

    calendar.append(DAY_SQUARE);

    //select a date
    const DAYS = document.querySelectorAll(".day");
    DAYS.forEach((day) => {
      day.addEventListener("click", () => {
        if (DAY_SQUARE === day) {
          const SELECTED_DATE = `${year} ${month + 1} ${DAY_SQUARE.innerHTML}`;
          DAY_SQUARE.classList.add("selected-day");
          updateArrivalDate(SELECTED_DATE, DAYS);
        } else {
          DAY_SQUARE.classList.remove("selected-day");
        }
      });
    });
  }
}

function updateArrivalDate(selectedDate, array) {
  array.forEach((day) => {
    day.classList.remove("selected-day");
  });
  array[array.length - 1].classList.add("selected-day");
  arrivalDate = new Date(selectedDate);
  localStorage.setItem("arrivalDate", arrivalDate);
}

//next previous buttons functionality
function initButtons() {
  const next = document.querySelector("#next-button");
  next.addEventListener("click", () => {
    nav++;
    displayCalendar();
  });

  const previous = document.querySelector("#previous-button");
  previous.addEventListener("click", () => {
    nav--;
    displayCalendar();
  });
}

initButtons();

// ---------- COUNTDOWN LOGIC ---------- //
const EVENT_NAME = document.querySelector("h1");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

export function countDown() {
  // ----- Retrieve arrival date from local storage if any ----- //
  let timeIsSet = localStorage.getItem("arrivalDate", arrivalDate);
  if (timeIsSet) {
    arrivalDate = new Date(timeIsSet);
  }

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
    const daysLeft = Math.floor(timeSpan / day) || "00";
    const hoursLeft = Math.floor((timeSpan % day) / hour) || "0";
    const minutesLeft = Math.floor((timeSpan % hour) / minute) || "0";
    const secondsLeft = Math.floor((timeSpan % minute) / second) || "0";
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
