//Use forEach to print all the names in an array

var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

// declare a function ES5 way
var oldFunc = function(name) {
    console.log(name)
}

names.forEach(oldFunc);

names.forEach(function(name) {
 	console.log(name);
});

// declare a function ES6 way
var newFunc = (name) => {
 	console.log(name);
}

names.forEach(newFunc);


names.forEach(name => console.log(name));

    