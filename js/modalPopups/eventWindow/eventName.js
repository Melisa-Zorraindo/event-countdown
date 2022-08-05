const eventTitle = document.querySelector("h1");
const newHeading = document.querySelector("#event-name");

function updateEventTitle(e) {
  let title = newHeading.value;
  eventTitle.innerHTML = "";
  eventTitle.innerHTML += title;
  localStorage.setItem("eventTitle", title);
}

newHeading.addEventListener("keyup", (e) => {
  updateEventTitle(e);
});
