const year = [
  { month: "January", days: 31 },
  { month: "February", days: 28 },
  { month: "March", days: 31 },
  { month: "April", days: 30 },
  { month: "May", days: 31 },
  { month: "June", days: 30 },
  { month: "July", days: 31 },
  { month: "August", days: 31 },
  { month: "September", days: 30 },
  { month: "October", days: 31 },
  { month: "November", days: 30 },
  { month: "December", days: 31 },
];

const week = ["S", "M", "T", "W", "T", "F", "S"];

const modalCalendar = document.querySelector("#modal-calendar");
const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

const yearHeading = document.createElement("div");
yearHeading.classList.add("modal-box");
yearHeading.innerHTML = currentYear;
modalCalendar.append(yearHeading);

const nextYear = document.createElement("i");
nextYear.classList.add("fas", "fa-caret-square-right");
nextYear.id = "next-year";
yearHeading.append(nextYear);

const monthHeading = document.createElement("div");
monthHeading.innerHTML = year[currentMonth].month;
yearHeading.append(monthHeading);

const daysBox = document.createElement("div");
daysBox.classList.add("calendar-box");
yearHeading.append(daysBox);

const weekDayBox = document.createElement("div");
week.forEach((day) => {
  const weekDay = document.createElement("div");
  weekDay.innerHTML += day;
  weekDay.classList.add("week-day-box");
  daysBox.append(weekDay);
});

//start day of week on right day
const firstDay = new Date(`${year[currentMonth].month} 1 ${currentYear}`);
console.log(firstDay);
const dayOffset = firstDay.getDay();
console.log(dayOffset);

for (let i = 0; i < dayOffset; i++) {
  const emptyDay = document.createElement("div");
  emptyDay.classList.add("calendar-day");
  daysBox.append(emptyDay);
}

const dayNumber = year[currentMonth].days;
for (let i = 0; i < dayNumber; i++) {
  const day = document.createElement("div");
  day.innerHTML += i + 1;
  day.classList.add("calendar-day");
  daysBox.append(day);
}

nextYearButton = document.querySelector("#next-year");
