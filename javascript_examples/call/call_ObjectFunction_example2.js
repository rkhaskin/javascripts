// for each element of the array use "this" and call a function 
var arr = [
    {
        animal: 'cats',
        sleepDuration: '12 and 16 hours'
    },
    {
        animal: 'bats',
        sleepDuration: '5 and 7 hours'
    }
];

function greet() {
    var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
}

// arrow function example
arr.forEach((elem) => greet.call(elem));

// anonymous function example
arr.forEach(function(elem) {
    greet.call(elem);
});  
/* -- output:
cats typically sleep between 12 and 16 hours
bats typically sleep between 5 and 7 hours
*/