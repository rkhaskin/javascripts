// Exercise 12: Retrieve id, title, and a 150x200 box art url for every video
// You've managed to flatten a tree that's two levels deep, let's try for three! Let's say that instead of a single boxart url on each video, we had a collection of boxart objects, each with a different size and url. Create a query that selects {id, title, boxart} for every video in the movieLists. This time though, the boxart property in the result will be the url of the boxart object with dimensions of 150x200px. Let's see if you can solve this problem with map(), concatAll(), and filter().

// There's just more one thing: you can't use indexers. In other words, this is illegal: var itemInArray = movieLists[0];

/* what we need to get back
[ { id: 70111470,
    title: 'Die Hard',
    boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg' },
  { id: 654356453,
    title: 'Bad Boys',
    boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg' },
  { id: 65432445,
    title: 'The Chamber',
    boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg' },
  { id: 675465,
    title: 'Fracture',
    boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg' }
 ]
*/

var MoviesList = require('./models/MovieLists3LvlDeep');
var movieLists = MoviesList.movieLists;
require('./prototype/ArrayProtoFlatMap');
require('./prototype/ArrayProtoMapImpl');

var res = movieLists
	  .map(function(movieList) {
		return movieList.videos
		  .map(function(video) {
			return video.boxarts
			  .filter(function(boxart) {
				return boxart.width === 150 && boxart.height === 200;
              })
			  .map(function(boxart) {
				return {id: video.id, title: video.title, boxart: boxart.url};
              });
		  })
		  .flatMap();
	  })
      .flatMap();
//console.log(res);      
