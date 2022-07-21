import { ACCESS_KEY } from "../apikey.js";
const url = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;

export async function fetchPhotos() {
  try {
    const response = await fetch(url);
    const photos = await response.json();
    // console.log(photos);
    return photos;
  } catch (error) {
    console.log(error);
  }
}
