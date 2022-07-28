import { year } from "./calendarComponents.js";
import { week } from "./calendarComponents.js";

const modalCalendar = document.querySelector("#modal-calendar");
const calendarContainer = document.querySelector("#calendar");
const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

export function displayCalendar() {
  modalCalendar.classList.remove("hidden");

  calendarContainer.innerHTML = "";
  const calendarBox = document.createElement("div");
  calendarBox.classList.add("modal-box");
  calendarContainer.append(calendarBox);

  const monthYearBox = document.createElement("div");
  monthYearBox.classList.add("calendar-heading");
  calendarBox.append(monthYearBox);

  const previousYear = document.createElement("i");
  previousYear.classList.add("fas", "fa-caret-square-left");
  previousYear.id = "previuos-year";
  monthYearBox.append(previousYear);

  const monthYearHeading = document.createElement("h3");
  monthYearHeading.innerHTML = `${year[currentMonth].month} ${currentYear}`;
  monthYearBox.append(monthYearHeading);

  const nextYear = document.createElement("i");
  nextYear.classList.add("fas", "fa-caret-square-right");
  nextYear.id = "next-year";
  monthYearBox.append(nextYear);

  const daysBox = document.createElement("div");
  daysBox.classList.add("calendar-box");
  calendarBox.append(daysBox);

  week.forEach((day) => {
    const weekDay = document.createElement("div");
    weekDay.innerHTML += day;
    weekDay.classList.add("weekday");
    daysBox.append(weekDay);
  });

  //start day of week on right day
  const firstDay = new Date(`${year[currentMonth].month} 1 ${currentYear}`);
  const dayOffset = firstDay.getDay();

  for (let i = 1; i < dayOffset; i++) {
    const emptyDay = document.createElement("div");
    emptyDay.classList.add("calendar-day", "inactive");
    daysBox.append(emptyDay);
  }

  const dayNumber = year[currentMonth].days;
  for (let i = 0; i < dayNumber; i++) {
    const day = document.createElement("div");
    day.innerHTML += i + 1;
    day.classList.add("calendar-day");
    if (i < currentDay) {
      day.classList.add("inactive");
    }
    daysBox.append(day);
  }

  //update calendar to next month
}
