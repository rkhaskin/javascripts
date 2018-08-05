/* below examples produce the same output: 
#0 Lion: King
#1 Whale: Fail
*/

// in all examples "this" points to each individual array element


var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];

// ---- call print() for each element of the array

var print = function (i) {
    console.log('#' + i + ' ' + this.species + ': ' + this.name);
}

for (var i = 0; i < animals.length; i++) {
    print.call(animals[i], i);
}

// ---- call an anonymous function for each element of the array

for (var i = 0; i < animals.length; i++) {
    (function (i) {
        console.log('#' + i + ' ' + this.species + ': ' + this.name);
    }).call(animals[i], i);
}

// ---- anonymous function with a function expression (this.print = function()). For each iteration a new context will load with an anonimous function
//      and this.print() will get called

for (var i = 0; i < animals.length; i++) {
    (function (i) {
        // is called by this.print()
        this.print = function () {
            console.log('#' + i + ' ' + this.species + ': ' + this.name);
        }
        // will execute after the function is loaded in a new execution context
        this.print();
    }).call(animals[i], i); // use animals[i] as "this"
}

