// The filter method accepts a callback function. In that callback function we examine each element of the array indidually, 
// and return true if we want the element to pass the filter.

const myArray = [1, 2, 3, 4];

const myEvenArray = myArray.filter(function(num) {
    return num % 2 === 0;
});

// the old array is not changed
console.log(myArray);  //[ 1, 2, 3, 4 ]
// the new array only holds even numbers
console.log(myEvenArray); // [ 2, 4 ]

const myEvenArray2 = myArray.filter((num)=> {
    return num % 2 === 0;
});

// ES6 version: the new array only holds even numbers
console.log(myEvenArray2); // [ 2, 4 ]

// ------------------------------------------------------

// find words that have a specific string
var strings = ["hello", "Matt", "Mastodon", "Cat", "dog"];

var filtered = strings.filter(function(str) {
    return str.includes("at");
});

console.log(filtered); // [ 'Matt', 'Cat' ]

// ES6 version
var filtered2 = strings.filter((str) => {
    return str.includes("at");
});

console.log(filtered2); // [ 'Matt', 'Cat' ]
