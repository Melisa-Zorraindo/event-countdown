const finalMessage = document.querySelector("#final-message");

finalMessage.addEventListener("keyup", () => {
  setFinalMessage();
});

function setFinalMessage() {
  let newFinalMessage = finalMessage.value;
  finalMessage.innerHTML = "";
  finalMessage.innerHTML = newFinalMessage;

  localStorage.setItem("finalMessage", newFinalMessage);
}
