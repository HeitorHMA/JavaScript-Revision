let inputText = document.querySelector("#wordInput");
let inputForm = document.querySelector(".submitClass");
let changeableTitle = document.querySelector("#changingTitle");
inputForm.addEventListener("submit", changeTitle);
function changeTitle(event) {
  event.preventDefault();
  let textInputed = inputText.value;
  changeableTitle.textContent = textInputed;
}
async function getUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json;
    let randomNum = Math.floor(Math.random() * 100 + 1);
    const user = data.results[randomNum];

    console.log(user.picture.small);
    console.log("${user.name.first} ${user.name.last}");
  } catch (error) {
    console.log(error);
  }
}
