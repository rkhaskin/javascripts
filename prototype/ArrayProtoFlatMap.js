Array.prototype.flatMap = function() {
	var results = [];
	this.forEach(function(subArray) {
		results.push.apply(results, subArray);
	});

	return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].flatMap()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].flatMap(); // throws an error because this is a one-dimensional array