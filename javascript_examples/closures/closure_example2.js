// After the execution context is gone from the stack, variables will still be there for certain cases. 
// Here we return an array of functions. The var "i" will remain in memory outside any execution context,
// but available for functions that were created in its former execution context, like in the example below
// its value will be what is was lastly set in its original execution context
function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        // create a function and push it into the array
        // function created in execution context A
        arr.push(function() {
            console.log(i);
        });
    }

    return arr;
}


var fs = buildFunctions();

// execute these functions
// function is called from execution context B
fs[0]();
// function is called from execution context C
fs[1]();
// function is called from execution context D
fs[2]();

// -- output 3, 3, 3 - the last value of i.


