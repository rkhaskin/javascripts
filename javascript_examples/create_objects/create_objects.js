// object property can be anything that can be converted to a string

var myObj = {}; // creating object
myObj.firstName = 'Alex';
myObj.lastName = 'Jones';

console.log(myObj); // { firstName: 'Alex', lastName: 'Jones' }

// add properties using dot
var myCar = new Object();   // creating object
myCar.make = 'Ford';        // adding properties to object
myCar.model = 'Mustang';
myCar.year = 1969;
myCar.color;
console.log(myCar.color); // undefined
console.log(myCar); // { make: 'Ford', model: 'Mustang', year: 1969 }

// add properties using brackets
var myCar2 = new Object();   // creating object
myCar2['make'] = 'Ford';        // adding properties to object
myCar2['model'] = 'Mustang';
myCar2['year'] = 1969;
console.log(myCar2); // { make: 'Ford', model: 'Mustang', year: 1969 }

