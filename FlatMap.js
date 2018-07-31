const DataArray = require('./MovieLists');
require('./ArrayProtoFlatMap');
const movieLists = DataArray.movieLists;

var allVideoIdsInMovieLists = movieLists
   .map(function(movieList) {
		return movieList.videos.map(function(video) {
			return video.id;
		  });
    })
    .flatMap();

console.log(allVideoIdsInMovieLists);

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
