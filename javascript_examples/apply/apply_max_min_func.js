// min/max number in an array
var numbers = [5, 6, 2, 3, 7];

// regular Math.max requires args
var max2 = Math.max(4,2,8, 3, 1);
console.log('max with args = ', max2);

// using Math.min/Math.max apply - converts array to args
var max = Math.max.apply(null, numbers); 
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)
console.log('max = ', max);

var min = Math.min.apply(null, numbers);
console.log('min = ', min);

// the "old" way of getting min/max
var max = -Infinity, min = +Infinity;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}