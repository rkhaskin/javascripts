// Exercise 3: Project an array of videos into an array of {id,title} pairs using forEach()
// For each video, add a projected {id, title} pair to the videoAndTitlePairs array.

const newReleases = require('./models/DataArray');

var videoAndTitlePairs = [];

newReleases.newReleases.forEach(function(elem) {
videoAndTitlePairs.push({id: elem.id, title: elem.title});
})


console.log(videoAndTitlePairs);