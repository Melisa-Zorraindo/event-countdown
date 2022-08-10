import { updateEventTitle } from "./eventName.js";
import { countDown } from "./calendar.js";
import { setFinalMessage } from "./finalMessage.js";

const EVENT_SAVE_BUTTON = document.querySelector(
  "#save-event-preferances-button"
);
const EVENT_EDITION_WINDOW = document.querySelector("#event-edition-window");
const OVERLAY = document.querySelector(".overlay");

EVENT_SAVE_BUTTON.addEventListener("click", () => {
  updateEventTitle();
  countDown();
  setFinalMessage();
  EVENT_EDITION_WINDOW.classList.add("hidden");
  OVERLAY.classList.add("hidden");
});

const EVENT_REMOVE_BUTTON = document.querySelector(
  "#remove-event-preferances-button"
);

EVENT_REMOVE_BUTTON.addEventListener("click", () => {
  //remove event name
  let eventTitle = localStorage.getItem("eventTitle");
  if (eventTitle) {
    localStorage.removeItem("eventTitle");
  }
  //remove selected date
  let arrivalDate = localStorage.getItem("arrivalDate");
  if (arrivalDate) {
    localStorage.removeItem("arrivalDate");
  }
  //remove final message
  let finalMessage = localStorage.getItem("finalMessage");
  if (finalMessage) {
    localStorage.removeItem("finalMessage");
  }
  //hide modal window
  EVENT_EDITION_WINDOW.classList.add("hidden");
  OVERLAY.classList.add("hidden");
  location.reload();
});
