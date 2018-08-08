// get the largest boxart

var boxarts = [
    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
];

// ES5
var res = boxarts.reduce(function(largest, current) {
    if (largest.width * largest.height > current.width * current.height)
       return largest;
    else
       return current;   
});
console.log(res);

// ES6
var res = boxarts.reduce( (largest, current) => {
    if (largest.width * largest.height > current.width * current.height)
       return largest;
    else
       return current;   
});
console.log(res);
