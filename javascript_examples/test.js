require('../prototype/ArrayProtoMapImpl');
require('../prototype/ArrayProtoFlatMap');

// Nearly every time we flatten a tree we chain map() and flatMap(). Sometimes, if we're dealing with a tree several levels deep, 
// we'll repeat this combination many times in our code. To save on typing, let's create a concatMap function that's just a map operation, followed by a flatAll.
Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
    return this.map(function (item) {
        return projectionFunctionThatReturnsArray(item);
    }).flatMap();

};

// multidimensional array
var spanishFrenchEnglishWords = [["cero", "rien", "zero"], ["uno", "un", "one"], ["dos", "deux", "two"], ["tres", "trei", "three"]];

// collect all the words for each number, in every language, in a single, flat list
//var allWords = range(0, spanishFrenchEnglishWords.length).concatMap(function (index) {
var allWords = [0,1,2,3].concatMap(function (index) {
    return spanishFrenchEnglishWords[index];
});

//console.log([].concat.apply([], spanishFrenchEnglishWords));
console.log('arrays are equal ', JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two","tres","trei","three"]');



// create an array of a specified size 
function range(start, end) {
    var foo = [];
    for (var i = start; i <= end; i++) {
        foo.push(i);
    }
    return foo;
}
