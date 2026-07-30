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
    const data = await response.json();
    let randomNum = Math.floor(Math.random() * 100 + 1);
    const user = data.results[0];
    console.log(user);
    console.log(user.picture.large);
    console.log(`${user.name.first} ${user.name.last}`);
    document.querySelector("#card").innerHTML = `
        <img src = "${user.picture.large}"></img>
<h3>${user.name.first} ${user.name.last}</h3> `;
  } catch (error) {
    console.log(error);
  }
}
let randomUserCard = document.querySelector("#card");
let randomUserForm = document.querySelector("#randomFaceGeneratorForm");
function getUserButton(event) {
  event.preventDefault();
  getUser();
}
randomUserForm.addEventListener("submit", getUserButton);
