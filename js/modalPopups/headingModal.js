const eventHeadingBg = document.querySelector("#bg-colour-event-name-picker");
const eventHeadingFontColour = document.querySelector(
  "#font-colour-event-name-picker"
);
const eventTitle = document.querySelector("h1");
const eventDays = document.querySelector("#days");
const eventHours = document.querySelector("#hours");
const eventMinutes = document.querySelector("#minutes");
const eventSeconds = document.querySelector("#seconds");

export function displayHeadingEditionOptions() {
  //create event bg colour picker
  eventHeadingBg.innerHTML = "";
  createColourSelector(
    eventHeadingBg,
    "Background colour",
    "bg-colour-selector"
  );

  //create font colour picker
  eventHeadingFontColour.innerHTML = "";
  createColourSelector(
    eventHeadingFontColour,
    "Font colour",
    "font-colour-selector"
  );
}

function createColourSelector(container, labelName, id) {
  //create label
  const label = document.createElement("label");
  label.innerHTML = labelName;
  container.append(label);
  //create colour selector
  const colourPicker = document.createElement("input");
  colourPicker.type = "color";
  colourPicker.id = id;
  colourPicker.value = " ";
  container.append(colourPicker);
  //add event listener
  colourPicker.addEventListener("change", () => {
    const hue = colourPicker.value;
    if (colourPicker.id === "bg-colour-selector") {
      changeHeadingBgColour(hue);
    } else if (colourPicker.id === "font-colour-selector") {
      changeHeadingFontColour(hue);
    }
  });
}

function changeHeadingBgColour(hue) {
  eventTitle.style.backgroundColor = hue;
  localStorage.setItem("headingBgColour", hue);
}

function changeHeadingFontColour(hue) {
  eventTitle.style.color = hue;
  localStorage.setItem("headingFontColour", hue);
}

const newtitle = document.querySelector("#event-name");
function updateEventTitle(e) {
  let title = newtitle.value;
  eventTitle.innerHTML = "";
  eventTitle.innerHTML += title;
  localStorage.setItem("eventTitle", title);
}

newtitle.addEventListener("keyup", (e) => {
  updateEventTitle(e);
});

const newFont = document.querySelector("#font-selection");
function updateFont(font) {
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
  eventTitle.style.fontFamily = font;
  eventDays.style.fontFamily = font;
  eventHours.style.fontFamily = font;
  eventMinutes.style.fontFamily = font;
  eventSeconds.style.fontFamily = font;

  //save updates to local storage
  let eventTitleFont = eventTitle.style.fontFamily;
  let eventDaysFont = eventDays.style.fontFamily;
  let eventHoursFont = eventHours.style.fontFamily;
  let eventMinutesFont = eventMinutes.style.fontFamily;
  let eventSecondsFont = eventSeconds.style.fontFamily;

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

newFont.addEventListener("change", () => {
  updateFont(newFont.value);
});
