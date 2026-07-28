let test = "Testing variables";
const cantChange = "This variable can't change";
var shouldNotUse = "Should not use var to declare variables"; // Using var is not recommended since it can have security issues when acessing variables in their scope //
function testingVarScope() {
  console.log(testingVar);
}
function firstCall() {
  console.log(test);
  console.log(cantChange);
  console.log(shouldNotUse);
}

function changeTest() {
  test = "Changed";
  console.log(test); // Works fine since let can be changed //
}

function changeCantChange() {
  cantChange = "Changed";
  console.log(cantChange); // Should throw an error since consts cant be changed //
}

function changeShouldNotUse() {
  shouldNotUse = "Changed me too";
  console.log(shouldNotUse);
}

firstCall();
changeTest();
//changeCantChange(); -> Caused an error as expected//
changeShouldNotUse();

var testingVar =
  "This variable is created after the console.log, but since it is an Var it should appear anywayS";
