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

export const users = [
  { id: 1, name: "Peter", active: true },
  { id: 2, name: "Billie", active: false },
  { id: 3, name: "John", active: true },
  { id: 4, name: "Paul", active: false },
  { id: 5, name: "Mary", active: true },
];

const activeUsers = users.filter((user) => user.active);
console.log(activeUsers);
console.log(name);
