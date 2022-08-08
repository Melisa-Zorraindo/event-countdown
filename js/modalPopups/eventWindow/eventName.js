const eventTitle = document.querySelector("h1");
const newHeading = document.querySelector("#event-name");

export function updateEventTitle() {
  let title = newHeading.value;
  eventTitle.innerHTML = "";
  eventTitle.innerHTML += title;
  localStorage.setItem("eventTitle", title);
}
