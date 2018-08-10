// Destructuring - easily extract array or object elements and store them in the properties.

// extract first two elements into the properties
const numbers = [1, 2, 3];
// variables on the left, array on the right;
[num1, num2] = numbers;
console.log(num1, num2); // 1 2 

// extract first and third element
[num1, ,num2] = numbers;
console.log(num1, num2); // 1 3
