// example on how to flatten a multidimensional array

var arr1 = [1, 2, 3, 4];

// concat merges two arrays into a new array. The code below is one of the ways
// to copy an array.
var arr2 = [].concat([], arr1);
console.log("copy array arr1 into a new array", arr2);

// ---------------------------

// merge two arrays into a new array
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var newArray = array1.concat(array2);
console.log("concatenanted array1 and array2", newArray);


// -----

// concat creates a new array consisting of the elements in the object on which it is called, 
// followed in order by, for each argument, the elements of that argument (if the argument is an array) 
// or the argument itself (if the argument is not an array). Concat recognizes arrays and adds their elements individually, but only for 
// the first level
var ar3 = ['a', 'b'].concat(1, 2, [3], [4,5]);
console.log("concatenanted args and arrays", ar3);
/* expected output
concatenanted args and arrays [ 'a', 'b', 1, 2, 3, 4, 5 ]
*/

var ar4 = ['a', 'b'].concat(1, 2, [3], [[4,5]]);
console.log("concatenanted args and arrays", ar4);
/* expected output
concatenanted args and arrays [ 'a', 'b', 1, 2, 3, [ 4, 5 ] ] - only one level is removed on [[4,5]]
*/


