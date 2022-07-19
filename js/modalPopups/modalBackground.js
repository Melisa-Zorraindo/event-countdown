import { closeModal } from "./commonFunctions/closeModalBoxes.js";
import { changeColour } from "./commonFunctions/selectColours.js";
import { createPhotoSelector } from "../functionality/apiCall.js";

export function displayBgEditionOptions(container) {
  //add modal class
  container.classList.add("modal-windows-container");

  //create close button container
  const closeBtnContainer = document.createElement("div");
  closeBtnContainer.classList.add("button-container");
  container.append(closeBtnContainer);

  //add a heading
  const heading = document.createElement("h2");
  heading.innerHTML = "Edit background";
  closeBtnContainer.append(heading);

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
  colourPickerLabel.innerHTML = "Solid colour";
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
  imagePickerLabel.innerHTML = `Images from <a href="https://unsplash.com/">Unsplash</a>`;
  imagePickerContainer.append(imagePickerLabel);
  //create search bar
  const imageSearchBar = document.createElement("input");
  imageSearchBar.type = "search";
  imageSearchBar.placeholder = "search";
  imageSearchBar.value = " ";
  imageSearchBar.id = "image-selector";
  imagePickerContainer.append(imageSearchBar);
  //display images
  const unsPhotoWrapper = document.createElement("div");
  unsPhotoWrapper.classList.add("uns-photo-wrapper");
  imagePickerContainer.append(unsPhotoWrapper);
  createPhotoSelector(unsPhotoWrapper);

  closeBtn.addEventListener("click", () => {
    closeModal(container);
  });

  colourPicker.addEventListener("change", () => {
    const body = document.querySelector("body");
    changeColour(body, colourPicker, "screenBg");
  });

  imageSearchBar.addEventListener("keydown", (e) => {
    console.log(e);
  });
}
