//  get video ids as a flat array from the MovieLists object using forEach

const DataArray = require('../models/MovieLists');

var allVideoIdsInMovieLists = [];

DataArray.movieLists.forEach(function(movieList) {
    return movieList.videos.forEach(function(video) {
    	allVideoIdsInMovieLists.push(video.id);
    })
  });
  
 console.log(allVideoIdsInMovieLists); // [ 70111470, 654356453, 65432445, 675465 ]