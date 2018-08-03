// Exercise 3: Project an array of videos into an array of {id,title} pairs using forEach()
// For each video, add a projected {id, title} pair to the videoAndTitlePairs array.

const DataArray = require('../models/DataArray');
const newReleases = DataArray.newReleases;

// when using Array.prototype.forEach(), must declare a new array
var videoAndTitlePairs = [];

// execute for each occurance
newReleases.forEach(function (elem) {
    videoAndTitlePairs.push({ id: elem.id, title: elem.title });
})


console.log(videoAndTitlePairs);