const DataArray = require('../models/MovieLists');

var allVideoIdsInMovieLists = [];

DataArray.movieLists.forEach(function(movieList) {
    return movieList.videos.forEach(function(video) {
    	allVideoIdsInMovieLists.push(video.id);
    })
  });
  
 console.log(allVideoIdsInMovieLists);