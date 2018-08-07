// takes array and a function. Can be reused for different type of function
// even functions with different number of arguments.
var mapForEach = function(ar, func) {
    var newArr = [];
    for (var i = 0; i < ar.length; i++) {
        // function is called on each element of the array
        newArr.push(func(ar[i]))
    }

    return newArr;
}

var ar = [1,2,3];

// pass in the array and a function
var ar1 = mapForEach(ar, function(item) {
    return item * 2;
});
console.log(ar1);

// -----------------------------------------
// pass in the array and a function
var ar2 = mapForEach(ar, function(item) {
    return item > 2;
});
console.log(ar2);

// -----------------------------------------
// we want to call mapForEach with a function that takes 2 parameters instead of 1.
var checkPastLimit = function(limit, item) {
    return item > limit;
};

// use bind to set the first parameter to a constant value. The first arg - "this" in this case does not matter.
// the second arg - 1 will be set limit arg as a constant on the checkPastLimit function.
// when checkPastLimit is called from the mapForEach: func(ar[i]) - only one arg is required, and this arg
// will be the second argument (the first is set with "bind") - item)
var ar3 = mapForEach(ar, checkPastLimit.bind(this, 1));
console.log(ar3);

// the function accepts limit as an arg. Used bind on the return function to set the first arg to limit. "This" is not important here.
// The function returned is the one that is passed to the mapForEach. As before, bind takes care of the first parameter, so an array element 
// will be passed as the "only" parameter in the mapForEach.
var checkPastLimitSimplified = function(limit) {
    return function(limit, item) {
        return item > limit;
    }.bind(this, limit);
}


// call simplified function with a limit. There is no need to use bind for each call to mapForEach
var ar4 = mapForEach(ar, checkPastLimitSimplified(1));
console.log(ar4);





