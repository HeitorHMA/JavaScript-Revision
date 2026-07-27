function init(name) {
  return function displayName() {
    console.log(name);
  };
}
const joão = init("João");
joão();
