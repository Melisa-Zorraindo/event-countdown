import { closeModal } from "./commonFunctions/closeModalBoxes.js";

const headingModal = document.querySelector("#heading-modal");
const eventHeadingBg = document.querySelector("#colour-bg-event-name-picker");
const overylay = document.querySelector(".overlay");

export function displayHeadingEditionOptions() {
  //add overlay
  overylay.classList.remove("hidden");

  //create event bg colour picker
  eventHeadingBg.innerHTML = "";
  console.log("test");
}

const closeModalWindow = document.querySelector("#close-title-edition");
closeModalWindow.addEventListener("click", () => {
  overylay.classList.add("hidden");
  closeModal(headingModal);
});
