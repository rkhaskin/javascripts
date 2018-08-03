//Map accepts the projection function to be applied to each item in the 
//source array, and returns the projected array.
const DataArray = require('../models/DataArray');
const newReleases = DataArray.newReleases;

// projection function
var narrowArray = function (video) {
    return { id: video.id, title: video.title };
}

// execute projection function for each element in the array
var newArray = newReleases.map(narrowArray);
console.log(newArray);