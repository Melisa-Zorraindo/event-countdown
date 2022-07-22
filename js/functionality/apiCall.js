export async function fetchPhotos(url) {
  try {
    const response = await fetch(url);
    const photos = await response.json();
    return photos.results || photos;
  } catch (error) {
    console.log(error);
  }
}
