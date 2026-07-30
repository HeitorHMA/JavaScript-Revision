let inputText = document.querySelector("#wordInput");
let inputForm = document.querySelector(".submitClass");
let changeableTitle = document.querySelector("#changingTitle");
inputForm.addEventListener("submit", changeTitle);
function changeTitle(event) {
  event.preventDefault();
  let textInputed = inputText.value;
  changeableTitle.textContent = textInputed;
}
