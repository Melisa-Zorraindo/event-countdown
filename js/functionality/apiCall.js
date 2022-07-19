import { ACCESS_KEY } from "../apikey.js";
const url = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;

async function fetchPhotos() {
  try {
    const response = await fetch(url);
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.log(error);
  }
}

const photos = await fetchPhotos();

export function createPhotoSelector(imageContainer) {
  photos.forEach((img) => {
    imageContainer.innerHTML += `
    <div class="uns-photo-container">
    <figure>
    <img class="uns-photo" id="${img.id}" src="${img.urls.thumb}">
    <figcaption>${img.user.name}</figcaption>
    </figure>
    </div>
    `;
  });
}

createPhotoSelector(photos);
