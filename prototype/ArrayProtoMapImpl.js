Array.prototype.map = function(projectionFunction) {
	var results = [];
//	console.log(this.length + " = ", this);
//	console.log(projectionFunction.toString());
	this.forEach(function(itemInArray) {
			results.push(projectionFunction(itemInArray));
	});

	return results;
};