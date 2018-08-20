// shallow copy an array

var arr = [1,2,3];
var arr2 = [...arr]; // like arr.slice() spread operator returns a shallow copy

console.log(arr, arr2);