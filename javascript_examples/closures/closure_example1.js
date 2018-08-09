// A closure is a function having access to the variables created in the parent execution context, even after the parent execution context is gone.

function greet(greeting) {
    return function(name) {
            console.log(greeting + ', ' + name);
    }
}


var sayHi = greet('Hi');
sayHi('Alex');