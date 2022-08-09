const finalMessage = document.querySelector("#final-message");

export function setFinalMessage() {
  let newFinalMessage = finalMessage.value;
  finalMessage.innerHTML = "";
  finalMessage.innerHTML = newFinalMessage;

  localStorage.setItem("finalMessage", newFinalMessage);
}
