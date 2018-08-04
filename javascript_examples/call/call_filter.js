var original = "There is 1 number 123 hello 431.";

// execute filter on original
var updated = Array.prototype.filter.call(original, function(val) {
    return val.match(/1/);
});

// Outputs: ["1","1","1"]
console.log(updated);

// Outputs: 111
console.log(updated.join(''));