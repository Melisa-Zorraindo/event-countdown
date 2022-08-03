let nav = 0;

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

  const dateString = firstDay.toLocaleDateString("en-GB", {
    weekday: "narrow",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  //find offset days to render empty squares
  const inactiveDays = weekdays.indexOf(dateString.split(", ")[0]);

  const calendarHeader = document.querySelector("#month-display");
  calendarHeader.innerHTML = `${dt.toLocaleDateString("en-GB", {
    month: "long",
  })} ${year}`;

  //clear calendar every time to avoid piling up months
  calendar.innerHTML = "";

  for (let i = 1; i <= inactiveDays + daysInMonth; i++) {
    const daySquare = document.createElement("div");
    daySquare.classList.add("day");

    i > inactiveDays
      ? (daySquare.innerHTML = i - inactiveDays)
      : daySquare.classList.add("inactive");

    calendar.append(daySquare);
  }
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
