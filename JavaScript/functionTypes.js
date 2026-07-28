//Arrow Functions
function normalOne() {
  console.log("this is the normal one");
}
let arrowTest = () => {
  console.log("this is the arrow one");
};
/* Async
async function one() {
  console.log("loading");
  await 2000;
  console.log(1);
}
one();
*/
//Promises
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
