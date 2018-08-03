// filter only videos with rating 4 and return a new array with only id and title

const DataArray = require('../models/DataArray');

// filtering function
var filterArray = function(video) {
    return video.rating === 4;
}

// mapping function
var mapArray = function(video) {
    return { id: video.id, title: video.title };
}

// filter will return a new array with elements with rating of 4
// map will build a new array with only id and title
var newArray =  DataArray.newReleases
    .filter(filterArray)
    .map(mapArray);
    
console.log(newArray);