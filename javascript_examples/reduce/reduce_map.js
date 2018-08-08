// get a url of the largest box art. Chain reduce() and map()

// override ES5 reduce() with custom implementation which returns array, and not a singe value/object
require('../../prototype/ArrayProtoReduceImpl');

var boxarts = [
    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
];

var res = boxarts
    .reduce(function (acc, curr) {
        if (acc.width * acc.height > curr.width * curr.height) {
            return acc;
        }
        else {
            return curr;
        }
    })
    .map(function (boxart) {
        return boxart.url;
    });


console.log(res); // [ 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg' ] - the url of the largest boxart
