// passes array as args to a function
var args = [0, 1, 2];

var args2 = [{'a': 1, 'b':2}, {'a': 3, 'b':4}, {'a': 5, 'b':6}]

function doStuff (x, y, z) {
    console.log(x, y, z);
 }

 // Call the function, passing args (old way)
doStuff.apply(null, args); // 0 1 2

// new way
doStuff(...args2); // { a: 1, b: 2 } { a: 3, b: 4 } { a: 5, b: 6 }
