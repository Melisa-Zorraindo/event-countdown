let nav = 0;

const weekdays = ["M", "T", "W", "T", "F", "S", "S"];

const calendar = document.querySelector("#calendar");

function displayCalendar() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
    console.log(nav);
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

  const inactiveDays = weekdays.indexOf(dateString.split(", ")[0]);

  const calendarHeader = document.querySelector("#month-display");
  calendarHeader.innerHTML = `${dt.toLocaleDateString("en-GB", {
    month: "long",
  })} ${year}`;

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

function initButtons() {
  const next = document.querySelector("#next-button");
  next.addEventListener("click", () => {
    nav++;
    // console.log(nav);
    displayCalendar();
  });

  const previous = document.querySelector("#previous-button");
  previous.addEventListener("click", () => {
    nav--;
    // console.log(nav);
    displayCalendar();
  });
}

displayCalendar();
initButtons();
