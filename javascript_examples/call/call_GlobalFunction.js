"use strict";

// if the function is not attached to the object, it's this object comes from global
function add (a, b) {
    return a + b;
}

// both identical. return 3.
// the "this" value is set implicitly
console.log(add(1, 2));
// the "this" points the add function's internal "this" value 
console.log(add.call(this, 1, 2));

