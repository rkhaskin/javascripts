// merge arrays
var arr1 = ['two', 'three'];
var arr2 = ['one', ...arr1, 'four', 'five'];

arr1.push(...arr2) // Adds arr2 items to end of array
console.log(arr1); // [ 'two', 'three', 'one', 'two', 'three', 'four', 'five' ]

// ---------------------------------------------------
var arr3 = ['two', 'three'];
var arr4 = ['one', ...arr3, 'four', 'five'];

arr3.unshift(...arr4) //Adds arr4 items to beginning of array
console.log(arr3);  // [ 'one', 'two', 'three', 'four', 'five', 'two', 'three' ]
