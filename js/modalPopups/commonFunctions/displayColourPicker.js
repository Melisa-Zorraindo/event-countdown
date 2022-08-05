// import { changeHeadingBgColour } from "./selectColours.js";
// import { changeHeadingFontColour } from "./selectColours.js";
// import { changeScreenBgColour } from "./selectColours.js";
import { changeFontColour } from "./selectColours.js";
import { changeBackgroundColour } from "./selectColours.js";

const EVENT_NAME = document.querySelector("h1");
const CLOCK = document.querySelector("#timer");
const BODY = document.querySelector("body");

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
        // changeHeadingBgColour(HUE);
        changeBackgroundColour(EVENT_NAME, HUE, "headingBgColour");
        break;

      case "font-colour-selector":
        // changeHeadingFontColour(HUE);
        changeFontColour(EVENT_NAME, HUE, "headingFontColour");
        break;

      case "timer-font-colour-selector":
        changeFontColour(CLOCK, HUE, "timerFontColour");
        break;

      case "timer-bg-colour-selector":
        changeBackgroundColour(CLOCK, HUE, "timerBgColour");

      case "screen-bg-colour-selector":
        changeBackgroundColour(BODY, HUE, "screenColour");
        // const body = document.querySelector("body");
        // changeScreenBgColour(body, colourPicker, "screenColour");
        break;
    }
  });
}
