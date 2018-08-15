const DataArray = require('../models/DataArray');
const newReleases = DataArray.newReleases;
require('../prototype/ArrayProtoFilterImpl');

// select only videos with rating 4
var narrowArray = function(video) {
    return video.rating === 4;
}

//for each video call a filter function
var newArray =  newReleases.filter(narrowArray);
console.log(newArray);