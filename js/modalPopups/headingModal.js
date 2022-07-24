const eventHeadingBg = document.querySelector("#bg-colour-event-name-picker");
const eventHeadingFontColour = document.querySelector(
  "#font-colour-event-name-picker"
);

export function displayHeadingEditionOptions() {
  //create event bg colour picker
  eventHeadingBg.innerHTML = "";
  createColourSelector(eventHeadingBg, "Background colour");

  //create font colour picker
  eventHeadingFontColour.innerHTML = "";
  createColourSelector(eventHeadingFontColour, "Font colour");
}

function createColourSelector(container, labelName) {
  //create label
  const label = document.createElement("label");
  label.innerHTML = labelName;
  container.append(label);
  //create colour selector
  const colourPicker = document.createElement("input");
  colourPicker.type = "color";
  colourPicker.id = "colour-picker";
  colourPicker.value = " ";
  container.append(colourPicker);
  //add event listener
  colourPicker.addEventListener("change", () => {
    console.log("test");
  });
}
