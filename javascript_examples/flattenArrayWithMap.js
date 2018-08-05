const DataArray = require('../models/MovieLists');
require('../prototype/ArrayProtoFlatMap');
const movieLists = DataArray.movieLists;

// returns a multidim array: [ [ 70111470, 654356453 ], [ 65432445, 675465 ] ]
var allVideoIdsInMovieLists = movieLists
   .map(function(movieList) {
		return movieList.videos.map(function(video) {
			return video.id;
		  });
    });

console.log(allVideoIdsInMovieLists);

// returns simple array [ 70111470, 654356453, 65432445, 675465 ]
var allVideoIdsInMovieLists2 = movieLists
   .map(function(movieList) {
		return movieList.videos.map(function(video) {
			return video.id;
		  });
    })
    .flatMap();

console.log(allVideoIdsInMovieLists2);

// var arr1 = [1, 2, [3, 4]];
// var arr2 = [].concat.apply([], arr1);
// console.log(arr2);

// const flatten = function(arr, result) {
//   for (var i = 0, length = arr.length; i < length; i++) {
//     var value = arr[i];
//     if (Array.isArray(value)) {
//       flatten(value, result);
//     } else {
//       result.push(value);
//     }
//   }
//   return result;
// };

// var arr1 = [1, 2, [3, 4]];
// var arr2 = [];
// arr2 = flatten(arr1, arr2);
// console.log(arr2);
