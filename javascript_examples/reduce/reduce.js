// reduce method reduces an array to a single value. The result of the reduce in ES5 is a single object, not an array

var numbers = [65, 44, 12, 4];

function getSum(total, num) {
    return total + num;
}

var sum = numbers.reduce(getSum);
console.log(sum);

// ES5 syntax
sum = numbers.reduce(function(total, curVal) {
    return total + curVal;
});
console.log(sum);

// ES6 syntax
sum = numbers.reduce((total, curVal) => {
    return total + curVal;
});
console.log(sum);


