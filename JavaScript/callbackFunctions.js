let callbackTesting = (command) => {
  let name = "Peter";
  command(name);
};

let callUgly = (name) => {
  console.log(`${name} is ugly`);
};

let callPretty = (name) => {
  console.log(`${name} is pretty`);
};

callbackTesting(callPretty);
callbackTesting(callUgly);
