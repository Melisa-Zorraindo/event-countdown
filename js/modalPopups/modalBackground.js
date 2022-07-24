import { closeModal } from "./commonFunctions/closeModalBoxes.js";
import { changeColour } from "./commonFunctions/selectColours.js";
import { ACCESS_KEY } from "../apikey.js";
import { fetchPhotos } from "../functionality/apiCall.js";
import { setBackgroundImage } from "./commonFunctions/selectPicture.js";

const modalWindowContainer = document.querySelector("#bg-modal");
const overylay = document.querySelector(".overlay");
const colourPicker = document.querySelector("#solid-colour-background-picker");
const photoContainer = document.querySelector("#image-picker");
const imageSearchBar = document.querySelector("#image-selector");

const photos = await fetchPhotos(
  `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`
);

export function displayBgEditionOptions() {
  //add overlay
  overylay.classList.remove("hidden");

  //create colour picker
  colourPicker.innerHTML = "";
  createColourPicker(colourPicker);

  // createPhotoSelector
  photoContainer.innerHTML = "";
  photos.forEach((img) => {
    createImageSelector(img);
  });

  // search photos functionality
  imageSearchBar.addEventListener("keyup", () => {
    let query = imageSearchBar.value;
    async function filterPictures() {
      const filteredPhotos = await fetchPhotos(
        `https://api.unsplash.com/search/photos/?query=${query}&client_id=${ACCESS_KEY}`
      );

      //clear container to host filtered images
      photoContainer.innerHTML = "";

      //render filtered images
      filteredPhotos.forEach((photo) => {
        createImageSelector(photo);
      });
    }
    filterPictures();
  });
}

const closeBtn = document.querySelector("#close-bg-modal");
closeBtn.addEventListener("click", () => {
  overylay.classList.add("hidden");
  closeModal(modalWindowContainer);
});

function createColourPicker(container) {
  //create label
  const colourPickerLabel = document.createElement("label");
  colourPickerLabel.innerHTML = "Solid colour";
  container.append(colourPickerLabel);
  //create colour selector
  const colourPicker = document.createElement("input");
  colourPicker.type = "color";
  colourPicker.id = "colour-picker";
  colourPicker.value = " ";
  container.append(colourPicker);
  //add event listener
  colourPicker.addEventListener("change", () => {
    const body = document.querySelector("body");
    changeColour(body, colourPicker, "screenColour");
  });
}

function createImageSelector(img) {
  let figure = document.createElement("figure");
  photoContainer.append(figure);

  let picture = document.createElement("img");
  picture.classList.add("uns-photo");
  picture.id = img.urls.regular;
  picture.src = img.urls.thumb;
  figure.append(picture);

  let caption = document.createElement("figcaption");
  caption.innerHTML = img.user.name;
  figure.append(caption);

  picture.addEventListener("click", () => {
    let bgImg = picture.id;
    setBackgroundImage(bgImg, "backgroundImage");
  });
}
