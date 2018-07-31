const DataArray = require('./DataArray');

var videoAndTitlePairs = [];

DataArray.newReleases.forEach(function(elem) {
videoAndTitlePairs.push({id: elem.id, title: elem.title});
})


console.log(videoAndTitlePairs);