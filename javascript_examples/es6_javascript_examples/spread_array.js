const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5, 6];

console.log(newNumbers); // [ 1, 2, 3, 4, 5, 6 ]

const newNumbers2 = [numbers, 5, 6];
console.log(newNumbers2); // [ [ 1, 2, 3, 4 ], 5, 6 ]
