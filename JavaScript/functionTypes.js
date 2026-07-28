//Arrow Functions//
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
normalOne();
arrowTest();
