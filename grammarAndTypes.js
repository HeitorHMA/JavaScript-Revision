let test = "Testing variables";
const cantChange = "This variable can't change";
var shouldNotUse = "Should not use var to declare variables";

function firstCall() {
  console.log(test);
  console.log(cantChange);
  console.log(shouldNotUse);
}

function changeTest() {
  test = "Changed";
  console.log(test);
}

function changeCantChange() {
  cantChange = "Changed";
  console.log(cantChange); // Should throw an error since consts cant be changed//
}

function changeTest() {
  test = "Changed";
  console.log(test);
}
