require('../../prototype/FunctionProtoConstruct');

function MyConstructor() {
    // call() converts args to array. As per mozilla, slice prevents optimization 
    // by V8.: var args = [].slice.call(arguments));
    // use Array.apply to get arguments as array
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    console.log(args);
    /* print each argument
    for (var i = 0; i < arguments.length; i++) {
        console.log('argument ' + i + '= ', arguments[i]);
    }
    */

    // build properties from each element of the array
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this['property' + nProp] = arguments[nProp];
    }
}

var myArray = [4, 'Hello world!', false];
// call the construct() on the prototype
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance);                          // MyConstructor { property0: 4, property1: 'Hello world!', property2: false }
console.log(myInstance.property1);                // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs true
console.log(myInstance.constructor);              // logs [Function: MyConstructor]