//Arrow Functions
function normalOne() {
  console.log("this is the normal one");
}
let arrowTest = () => {
  console.log("this is the arrow one");
};

//Promises and Async
function generateRandomNumber() {
  return new Promise((resolve) => {
    let randomNumber = Math.floor(Math.random() * 10);
    setTimeout(() => {
      resolve(randomNumber);
    }, 2000);
  });
}
async function loadNUmber() {
  console.log("generating number...");
  const number = await generateRandomNumber();
  console.log(number);
}
loadNUmber();
