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
const promiseTest = new Promise((resolve, reject) => {
  let OrderNumber = Math.floor(Math.random() * 10);
  let itemBought = OrderNumber;
  if (itemBought >= 5) {
    resolve("resolvido");
  } else {
    reject("rejeitado");
  }
  console.log(OrderNumber);
});
promiseTest
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
