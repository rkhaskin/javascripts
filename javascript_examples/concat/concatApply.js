// concat.apply converts array an into arguments: [1, 2, [3, 4]] -> goes into apply() -> (1, 2, [3], [4]) -> goes into concat
// if an array is nested, and we want to copy/merge it (flattened) into a new array and flatten it, we use concat.apply

var arr1 = [1, 2, [3, 4]];

// apply is only there to convert an array into a series of arguments for concat.
// so instead of the [1, 2, [3, 4]], the input into concat is (1, 2, [3], [4]), 
// which causes the nested arrays in the argument to be flattened (one level only)
var arr2 = [].concat.apply([], arr1);
console.log(arr2);
// --output [ 1, 2, 3, 4 ]


var arr3 = [].concat.apply([], [1, 2, [[3, 4]]]);
console.log(arr3);
// -- output [ 1, 2, [ 3, 4 ] ] - flattened by 1 level only
