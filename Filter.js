const DataArray = require('./models/DataArray');

var narrowArray = function(video) {
    return video.rating === 4;
}

var newArray =  DataArray.newReleases.filter(narrowArray);
console.log(newArray);