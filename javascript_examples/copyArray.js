// example on how to copy array

var arr1 = [1, 2, 3, 4];

// concat merges two arrays into a new array. The code below is one of the ways
// to copy an array.
var arr2 = [].concat([], arr1);
console.log("copy array arr1 into a new array", arr2);

// ES6 spred operator. Shallow copy
var arr3 = [...arr1];
console.log("arr3 ", arr2);