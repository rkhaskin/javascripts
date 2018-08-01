const DataArray = require('./models/DataArray');
const newReleases = DataArray.newReleases;

var narrowArray = function(video) {
    return { id: video.id, title: video.title };
}

var newArray =  newReleases.map(narrowArray);
console.log(newArray);