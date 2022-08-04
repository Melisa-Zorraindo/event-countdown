import { changeHeadingBgColour } from "./selectColours.js";
import { changeHeadingFontColour } from "./selectColours.js";
import { changeScreenBgColour } from "./selectColours.js";

export function displayColourSelector(container, labelName, id) {
  //create label
  const LABEL = document.createElement("label");
  LABEL.classList.add("colour-picker-label");
  LABEL.innerHTML = labelName;
  container.append(LABEL);
  //create colour selector
  const colourPicker = document.createElement("input");
  colourPicker.type = "color";
  colourPicker.id = id;
  colourPicker.value = " ";
  container.append(colourPicker);
  //add event listener
  colourPicker.addEventListener("change", () => {
    const HUE = colourPicker.value;
    const ID = colourPicker.id;

    switch (ID) {
      case "bg-colour-selector":
        changeHeadingBgColour(HUE);
        break;

      case "font-colour-selector":
        changeHeadingFontColour(HUE);
        break;

      case "screen-bg-colour":
        const body = document.querySelector("body");
        changeScreenBgColour(body, colourPicker, "screenColour");
        break;
    }
  });
}
