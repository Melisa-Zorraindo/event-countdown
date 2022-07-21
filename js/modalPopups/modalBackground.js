import { closeModal } from "./commonFunctions/closeModalBoxes.js";
import { changeColour } from "./commonFunctions/selectColours.js";
import { fetchPhotos } from "../functionality/apiCall.js";
import { setBackgroundImage } from "./commonFunctions/selectPicture.js";

const photos = await fetchPhotos();

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

  // createPhotoSelector
  photos.forEach((img) => {
    const photoContainer = document.createElement("div");
    photoContainer.classList.add("uns-photo-container");
    unsPhotoWrapper.append(photoContainer);

    const figure = document.createElement("figure");
    photoContainer.append(figure);

    const picture = document.createElement("img");
    picture.classList.add("uns-photo");
    picture.id = img.urls.regular;
    picture.src = img.urls.thumb;
    figure.append(picture);

    const caption = document.createElement("figcaption");
    caption.innerHTML = img.user.name;
    figure.append(caption);

    picture.addEventListener("click", () => {
      const bgImg = picture.id;
      setBackgroundImage(bgImg, "backgroundImage");
    });
  });

  closeBtn.addEventListener("click", () => {
    closeModal(container);
  });

  colourPicker.addEventListener("change", () => {
    const body = document.querySelector("body");
    changeColour(body, colourPicker, "screenColour");
  });

  imageSearchBar.addEventListener("keydown", (e) => {
    console.log(e);
  });
}
