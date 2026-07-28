const arrayTest = [1, 2, 3, 4, 5, 6, 7];
//MAP - Apply to each number
const doubleNumber = arrayTest.map((num) => num * 2);
console.log(doubleNumber);

//FILTER - Use paramater to get certain itens
const even = arrayTest.filter((num) => num % 2 === 0);
console.log(even);

//REDUCE - Callback function to each element of an array
const sum = arrayTest.reduce((total, num) => total + num, 0);
console.log(sum);

//FIND - Find first array element that mathces parameter
const biggerThan5 = arrayTest.find((num) => num > 5);
console.log(biggerThan5);
