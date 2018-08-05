// concat can be used to merge two arrays or to create an array out of arguments.
// when used on arrays, arrays are copied exactly: nested arrays are preserved
// new array is created when doing concat

// array
var arr1 = [1, 2, [3], 4];
var arr2 = [].concat([], arr1);
console.log("copy array arr1 into a new array", arr2);
// -- output: [ 1, 2, [ 3 ], 4 ]

// merge two arrays into a new array
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var newArray = array1.concat(array2);
console.log("concatenanted array1 and array2", newArray);
// -- output [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// concat multiple arrays
var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];
  
var nums = num1.concat(num2, num3);
console.log(nums); 
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]