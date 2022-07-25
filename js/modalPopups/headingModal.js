const eventHeadingBg = document.querySelector("#bg-colour-event-name-picker");
const eventHeadingFontColour = document.querySelector(
  "#font-colour-event-name-picker"
);
const eventTitle = document.querySelector("h1");

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
