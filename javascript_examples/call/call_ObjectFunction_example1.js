// If the function is attached to an object, 
// its default "this" is the object where method is defined.

var palestrina = {
    work: "Missa Papae Marcelli",
    describe: function() {
        console.log(this.work);
    }
};

// Outputs: "Missa Papae Marcelli",
palestrina.describe();

//call() gives us a way to "borrow" a method from one object to use for another.
var erasmus = {
    work: "Freedom of the Will"
};

// Outputs: "Freedom of the Will" - "this" points to the erasmus object
palestrina.describe.call(erasmus);