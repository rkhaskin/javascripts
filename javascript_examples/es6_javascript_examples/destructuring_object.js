// Destructuring - easily extract array or object elements and store them in the properties.

const person = {name:'Max', age:28, height:5.10}

// extract from object only properties you need
var {name, age} = person;

console.log(name, age); // Max 28