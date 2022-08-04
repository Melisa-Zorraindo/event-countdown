export function createColourSelector(container, labelName, id) {
  //create label
  const label = document.createElement("label");
  label.classList.add("colour-picker-label");
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
