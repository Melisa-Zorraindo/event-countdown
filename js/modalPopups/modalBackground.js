import { closeModal } from "./commonFunctions/closeModalBoxes.js";
import { updateColour } from "./commonFunctions/selectColours.js";

export function displayBgEditionOptions(container) {
  //add modal class
  container.classList.add("modal-windows-container");
  //create close button container
  const closeBtnContainer = document.createElement("div");
  closeBtnContainer.classList.add("button-container");
  container.append(closeBtnContainer);

  //create close button
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close");
  closeBtn.id = "close-modal";
  //set icon in close button
  const closeBtnIcon = document.createElement("i");
  closeBtnIcon.classList.add("fas", "fa-times");
  closeBtn.append(closeBtnIcon);
  closeBtnContainer.append(closeBtn);
  //create first modal container
  const colourPickerContainer = document.createElement("div");
  colourPickerContainer.classList.add("modal-box");
  container.append(colourPickerContainer);
  //create label
  const colourPickerLabel = document.createElement("label");
  colourPickerLabel.innerHTML = "Choose a colour";
  colourPickerContainer.append(colourPickerLabel);
  //create colour selector
  const colourPicker = document.createElement("input");
  colourPicker.type = "color";
  colourPicker.id = "colour-picker";
  colourPicker.value = " ";
  colourPickerContainer.append(colourPicker);

  //create second modal container
  const imagePickerContainer = document.createElement("div");
  imagePickerContainer.classList.add("modal-box");
  container.append(imagePickerContainer);
  //create label
  const imagePickerLabel = document.createElement("label");
  imagePickerLabel.innerHTML = "Choose an image";
  imagePickerContainer.append(imagePickerLabel);
  //create search bar
  const imageSearchBar = document.createElement("input");
  imageSearchBar.type = "text";
  imageSearchBar.placeholder = "search";
  imageSearchBar.value = " ";
  imageSearchBar.id = "image-selector";
  imagePickerContainer.append(imageSearchBar);

  closeBtn.addEventListener("click", () => {
    closeModal(container);
  });

  colourPicker.addEventListener("change", () => {
    const body = document.querySelector("body");
    updateColour(body, colourPicker);
  });
}
