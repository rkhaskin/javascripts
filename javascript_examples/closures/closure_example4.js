// what if we really want to execute these functions with their original values (1, 2, 3)
// this is ES 5 version of the closure_example3.js
function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            // this function will be executed immediately in its own execution context. So every "j" will be created in its own context and remain
            // in memory after the context is gone thanks to closure.
            (function (j) {
                // this is what goint to be pushed in the array
                return function () {
                    console.log(j)
                };
            })(i));
    }

    return arr;
}


var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// -- output 0, 1, 2