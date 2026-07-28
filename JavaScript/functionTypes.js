//Async//
async function one() {
  console.log("loading");
  await 2000;
  console.log(1);
}
one();
