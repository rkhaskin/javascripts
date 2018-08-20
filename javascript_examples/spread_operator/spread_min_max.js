// get a min or max from an array. Same as Math.max.apply. Array is converted into args
let numbers = [9, 4, 7, 1];
var res = Math.min(...numbers);
console.log(res); // 1

res = Math.max(...numbers);
console.log(res); // 9

