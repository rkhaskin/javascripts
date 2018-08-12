// The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) If no elements are specified, splice wil only remove elements

var months = ['Jan', 'March', 'April', 'June'];
// start pos:1, delete:none, value
months.splice(1, 0, 'Feb');
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

// replaces 1 element at 4th index
months.splice(4, 1, 'May');
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
