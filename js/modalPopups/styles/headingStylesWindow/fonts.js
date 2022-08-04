const EVENT_TITLE = document.querySelector("h1");
const EVENT_DAYS = document.querySelector("#days");
const EVENT_HOURS = document.querySelector("#hours");
const EVENT_MINUTES = document.querySelector("#minutes");
const EVENT_SECONDS = document.querySelector("#seconds");

export function updateFont(font) {
  font === "null";
  switch (font) {
    case "sans-serif":
      font = "Poppins";
      break;

    case "cursive":
      font = "Happy Monkey";
      break;

    case "handwriting":
      font = "Dancing Script";
      break;

    case "serif":
      font = "Josefin Slab";
      break;

    case "monospace":
      font = "Inconsolata";
  }

  //update styles
  EVENT_TITLE.style.fontFamily = font;
  EVENT_DAYS.style.fontFamily = font;
  EVENT_HOURS.style.fontFamily = font;
  EVENT_MINUTES.style.fontFamily = font;
  EVENT_SECONDS.style.fontFamily = font;

  //save updates to local storage
  let eventTitleFont = EVENT_TITLE.style.fontFamily;
  let eventDaysFont = EVENT_DAYS.style.fontFamily;
  let eventHoursFont = EVENT_HOURS.style.fontFamily;
  let eventMinutesFont = EVENT_MINUTES.style.fontFamily;
  let eventSecondsFont = EVENT_SECONDS.style.fontFamily;

  let eventFont = localStorage.getItem("fonts")
    ? JSON.parse(localStorage.getItem("fonts"))
    : [];

  eventFont.unshift(
    eventTitleFont,
    eventDaysFont,
    eventHoursFont,
    eventMinutesFont,
    eventSecondsFont
  );

  eventFont.splice(5, 5);

  localStorage.setItem("fonts", JSON.stringify(eventFont));
}
