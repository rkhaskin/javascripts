// merge array 2 into array 1
// push, unlike concat, does not create a new array

// if we just do push
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push(elements);
console.log(array); // [ 'a', 'b', [ 0, 1, 2 ] ] - the second array is added is the entire array, not as individual elements

var array1 = ['a', 'b'];
array1.push(2, 3, 4);
console.log(array1); // [ 'a', 'b', 2, 3, 4 ] - push adds args to the array individually


var array2 = ['a', 'b'];
var elements2 = [0, 1, 2];
// use apply to convert an array into args, then push will use them to add to an array
array2.push.apply(array2, elements2);
console.log(array2); // ["a", "b", 0, 1, 2]