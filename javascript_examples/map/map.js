// map makes a copy of an the array, on which it is called. It returns a new array of the same length, but usually it is transformed.

const arr = [1, 2, 3, 4];

// callback function is passed into the map function and it is applied to each object of the original array before pushing it to the new array
// original array is not altered
const res = arr.map(function (elem) {
    return elem + 5;
});

console.log('Original = ',arr);
console.log('New = ',  res);

// map also takes args: elem, index and entire array
const plus5 = arr.map((val, i, arr) => {
    return {
        value: val,
        index: i
    };
});

console.log(plus5);