const DataArray = require('./DataArray');

var narrowArray = function(video) {
    return { id: video.id, title: video.title };
}

var newArray =  DataArray.newReleases.map(narrowArray);
console.log(newArray);