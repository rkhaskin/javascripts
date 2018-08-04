function myFunc () {
    // Invoke `slice` with `arguments`as it's `this` value
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
    var args1 = Array.prototype.slice(arguments);
    console.log(args1);

}

myFunc(1, 2, 3);