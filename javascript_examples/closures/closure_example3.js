// what if we really want to execute these functions with their original values (1, 2, 3)
function buildFunctions() {
    var arr = [];

    // the internal execution context will be created for each iteration, creating individual "let" instances in memory.
    for (var i = 0; i < 3; i++) { // beginning of a new block scope
        // this is ES6 syntax with "let".
        let j = i;  // will not work with "var"
        arr.push(function() {
            console.log(j);
        });
    } // end of block scope

    return arr;
}


var fs = buildFunctions();

// when we execute a function, it will get the proper value of "j". It will exist outside any execuition context, but still accessable to the functions that were
// created inside it.
fs[0]();
fs[1]();
fs[2]();

// -- output 0, 1, 2