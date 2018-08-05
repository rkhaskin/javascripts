// If your value array might grow into the tens of thousands, use a hybrid strategy: apply your function to chunks of the array at a time:
function minOfArray(arr) {
    var min = Infinity;
    // length of data to process at a time
    var QUANTUM = 32768;

    for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
        var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
        min = Math.min(submin, min);
        console.log(submin, min);
    }

    return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);
console.log(min);