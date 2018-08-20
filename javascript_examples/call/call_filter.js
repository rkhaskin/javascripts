var original = "There is 1 number 123 hello 431.";

//console.log([].map.call(original, function() {

// }));
// execute filter on the array. call() converts a string into an array-like structure
// T,h,e,r,e ..... and then the filter() works on individual args
var updated = Array.prototype.filter.call(original, function(val) {
    //console.log(val);
    return val.match(/1/);
});
// same code as above
var updated = [].filter.call(original, function(val) {
    console.log(val);
    return val.match(/1/);
});
// Outputs: ["1","1","1"]
console.log(updated);

// Outputs: 111
console.log(updated.join(''));