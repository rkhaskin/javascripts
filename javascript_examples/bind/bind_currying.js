// creating a copy of a function with some preset parameters is called currying. 
// useful in math calculations

function multiply(a, b) {
    return a * b;
}

// bind makes a copy of the function with  a specific "this"
// arguments other than the first one are used to set values on the copied function:
// multiply(a, b) is copied. On a copy the first arg(a) is set to 2. Now when invoking the copy function, I will pass only 1 arg, which is the second arg into the copied
// multiply function. The first argument will always be 2 (or whatever is passed in the bind)
var multiplyBy2 = multiply.bind(this, 2)
var res = multiplyBy2(3);
console.log(res); // 6

var multiplyByBoth = multiply.bind(this, 2, 4)
var res = multiplyByBoth(3); // this param will be ignored
console.log(res); // 8

var multiplyByAny = multiply.bind(this)
var res = multiplyByAny(3, 4); // this param will be ignored
console.log(res); // 12