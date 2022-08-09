import { displayColourSelector } from "../../commonFunctions/displayColourPicker.js";
import { ACCESS_KEY } from "./apikey.js";
import { fetchPhotos } from "./apiCall.js";
import { setBackgroundImage } from "./selectPicture.js";

const BG_EDITION_WINDOW = document.querySelector("#background-edition-window");
const BG_COLOUR = document.querySelector("#background-colour-picker");
const PHOTO_CONTAINER = document.querySelector("#image-picker");
const IMAGE_SEARCH_BAR = document.querySelector("#image-selector");

const PHOTOS = await fetchPhotos(
  `https://api.unsplash.com/photos/?per_page=12&client_id=${ACCESS_KEY}`
);

export function displayBackgroundEditionWindow() {
  //display window
  BG_EDITION_WINDOW.classList.remove("hidden");

  /*   //create bg colour picker
  BG_COLOUR.innerHTML = "";
  displayColourSelector(
    BG_COLOUR,
    "Select background colour",
    "screen-bg-colour-selector"
  ); */

  // createPhotoSelector
  PHOTO_CONTAINER.innerHTML = "";
  PHOTOS.forEach((img) => {
    createImageSelector(img);
  });

  // search photos settings
  IMAGE_SEARCH_BAR.addEventListener("keyup", () => {
    let query = IMAGE_SEARCH_BAR.value;
    async function filterPictures() {
      const FILTERED_PHOTOS = await fetchPhotos(
        `https://api.unsplash.com/search/photos/?query=${query}&per_page=12&client_id=${ACCESS_KEY}`
      );

      //clear container to host filtered images
      PHOTO_CONTAINER.innerHTML = "";

      //render filtered images
      FILTERED_PHOTOS.forEach((photo) => {
        createImageSelector(photo);
      });
    }
    filterPictures();
  });
}

function createImageSelector(img) {
  let figure = document.createElement("figure");
  PHOTO_CONTAINER.append(figure);

  let picture = document.createElement("img");
  picture.classList.add("uns-photo");
  const {
    urls: { thumb: thumbnail, regular: backgroundSize },
  } = img;
  picture.src = thumbnail;
  figure.append(picture);

  let caption = document.createElement("figcaption");
  caption.innerHTML = img.user.name;
  figure.append(caption);

  picture.addEventListener("click", () => {
    const BG_IMG = backgroundSize;
    setBackgroundImage(BG_IMG, "backgroundImage");
  });
}

//retrieve background image from storage
export function updateBackgroundImage(localStorageKey) {
  document.body.style.background = `url("${localStorageKey}") center/cover no-repeat`;
}
