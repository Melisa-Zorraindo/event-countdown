import { ACCESS_KEY } from "../apikey.js";
const url = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;

export async function fetchPhotos(imageContainer) {
  try {
    const response = await fetch(url);
    const photo = await response.json();
    photo.forEach((img) => {
      imageContainer.innerHTML += `
      <div class="uns-photo-container">
      <figure>
      <img class="uns-photo" src="${img.urls.thumb}">
      <figcaption>${img.user.name}</figcaption>
      </figure>
      </div>
      `;
    });
  } catch (error) {
    console.log(error);
  }
}
//   <p>${img.user.name}</p>
