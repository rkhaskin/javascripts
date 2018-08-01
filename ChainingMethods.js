const DataArray = require('./models/DataArray');

var filterArray = function(video) {
    return video.rating === 4;
}

var mapArray = function(video) {
    return { id: video.id, title: video.title };
}

var newArray =  DataArray.newReleases
    .filter(filterArray)
    .map(mapArray);
    
console.log(newArray);