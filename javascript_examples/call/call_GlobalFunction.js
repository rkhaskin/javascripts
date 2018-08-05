// The call() method calls a function with a given "this" value and arguments provided individually.
// the fundamental difference between call() and apply() is that call() accepts an argument list, while apply() accepts a single array of arguments.

// if the function is not attached to the object, its "this" object comes from global
function add (a, b) {
    return a + b;
}

// both examples are identical
// the "this" value is set implicitly
console.log(add(1, 2));
// -- output 3

// the "this" points to whatever the called function "this" points to. In this example add() is not a property of an object, so "this" points to the global object
console.log(add.call(this, 1, 2));
// -- output 3

