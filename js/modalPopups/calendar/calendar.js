import { year } from "./calendarComponents.js";
import { week } from "./calendarComponents.js";

const modalCalendar = document.querySelector("#modal-calendar");
const calendarCard = document.querySelector("#calendar");
const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

export function displayCalendar() {
  modalCalendar.classList.remove("hidden");

  calendarCard.innerHTML = "";
  const calendarContainer = document.createElement("div");
  calendarContainer.classList.add("modal-box");
  calendarCard.append(calendarContainer);

  const monthYearBox = document.createElement("div");
  monthYearBox.classList.add("calendar-heading");
  calendarContainer.append(monthYearBox);

  const previous = document.createElement("i");
  previous.classList.add("fas", "fa-caret-square-left");
  previous.id = "previuos";
  monthYearBox.append(previous);

  const monthYearHeading = document.createElement("h3");
  monthYearHeading.innerHTML = `${year[currentMonth].month} ${currentYear}`;
  monthYearBox.append(monthYearHeading);

  const next = document.createElement("i");
  next.classList.add("fas", "fa-caret-square-right");
  next.id = "next";
  monthYearBox.append(next);

  const calendarBox = document.createElement("div");
  calendarBox.classList.add("calendar-box");
  calendarContainer.append(calendarBox);

  const weekdaysBox = document.createElement("div");
  weekdaysBox.classList.add("calendar-weekday");
  calendarBox.append(weekdaysBox);

  week.forEach((day) => {
    const weekDay = document.createElement("div");
    weekDay.innerHTML += day;
    weekDay.classList.add("weekday");
    weekdaysBox.append(weekDay);
  });

  const dayBox = document.createElement("div");
  dayBox.classList.add("day-box");
  calendarBox.append(dayBox);

  //start day of week on right day
  const firstDay = new Date(`${year[currentMonth].month} 1 ${currentYear}`);
  const dayOffset = firstDay.getDay();

  renderCalendarDays(dayOffset, dayBox);

  //update calendar to next month
  next.addEventListener("click", () => {
    displayFollowingMonth(monthYearHeading, dayBox);
  });
}

let addedMonth = 0;
let yearAddition = 0;
let monthRestart = year[0].month;
function displayFollowingMonth(heading, calendarContainer) {
  //display following month
  addedMonth++;
  let followingMonth = year[currentMonth + addedMonth].month;
  heading.innerHTML = `${followingMonth} ${currentYear}`;

  //display calendar for matching month
  calendarContainer.innerHTML = "";

  //start day of week on right day
  const startDay = new Date(
    `${year[currentMonth + addedMonth].month} 1 ${currentYear}`
  );
  const dayOffset = startDay.getDay();
  renderCalendarDays(dayOffset, calendarContainer);

  //display following year if applicable

  //deactivate button if applicable
}

function renderCalendarDays(dayOffset, container) {
  //start day of week on right day
  for (let i = 1; i < dayOffset; i++) {
    const emptyDay = document.createElement("div");
    emptyDay.classList.add("calendar-day", "inactive");
    container.append(emptyDay);
  }

  const dayNumber = year[currentMonth].days;
  for (let i = 0; i < dayNumber; i++) {
    const day = document.createElement("div");
    day.innerHTML += i + 1;
    day.classList.add("calendar-day");
    if (i < currentDay) {
      day.classList.add("inactive");
    }
    container.append(day);
  }
}
