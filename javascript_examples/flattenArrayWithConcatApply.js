// example on how to flatten a multidimensional array

var arr1 = [1, 2, [3, 4]];

// concat merges two arrays into one. In this case it copies arr1 into a new []
// and assigns it to arr2. 
var arr2 = [].concat.apply([], arr1);

console.log(arr2);

