// concat can be used to merge two arrays or to create an array out of arguments.

// array merged with arguments:
var ar1 = ['a', 'b'].concat(1, 2, 3, 4, 5);
console.log("concatenanted array with args (no array)", ar1);
// -- output: [ 'a', 'b', 1, 2, 3, 4, 5 ]


// if inside arguments we have arrays, concat will flatten them in the new array, but only for the first level
var ar3 = ['a', 'b'].concat(1, 2, [3], [4,5]);
console.log("concatenanted array with arguments (containing array)", ar3);
// -- output [ 'a', 'b', 1, 2, 3, 4, 5 ]

var ar4 = ['a', 'b'].concat(1, 2, [3], [[4,5]]);
console.log("concatenanted array with arguments (ontaining multidimensional array)", ar4);
// -- output: [ 'a', 'b', 1, 2, 3, [ 4, 5 ] ] - only one level is flattened on [[4,5]]



