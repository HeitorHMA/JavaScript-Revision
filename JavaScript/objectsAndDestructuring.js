// Create Object
const user = {
  name: "Peter",
  email: "peter@email.com",
  age: 25,
  active: true,
};
//Acessing .name
console.log(user.name);

const { name, email, age, active } = user; //Unpacking and turning those those properties into variables of this scope

console.log(name);
