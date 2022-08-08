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
