Array.prototype.filter = function(predicateFunction) {
	var results = [];

    this.forEach(function(itemInArray) {
//		console.log("aaaa");
    if (predicateFunction(itemInArray)) 
      	results.push(itemInArray);
	});

	return results;
};