let inputText = document.querySelector("#wordInput");
let inputForm = document.querySelector(".submitClass");

inputForm.addEventListener("submit", getInput);
function getInput(event) {
  let textInputed = inputText.value;
  alert(`you wrote ${textInputed}`);
  event.preventDefault();
}
