// used on multidimensional arrays.

Array.prototype.flatMap = function() {
	var results = [];
	this.forEach(function(subArray) {
		results.push.apply(results, subArray);
	});

	return results;
};


//  console.log(JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].flatMap()) === "[1,2,3,4,5,6,7,8,9]");
//  var array = [ [[1,2,3]], [[4,5,6]], [[7,8,9]] ];
//  var a2 = array.flatMap();
//  console.log(a2);
//  console.log(a2.flatMap());
 //console.log(JSON.stringify(array.flatMap()));

// [1,2,3].flatMap(); // throws an error because this is a one-dimensional array