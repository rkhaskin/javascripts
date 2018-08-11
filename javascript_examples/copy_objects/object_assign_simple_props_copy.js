// A shallow copy will duplicate the top-level properties, but the nested object is shared between the original(source) and the copy(target).


let obj = { a: 1, b: 2 };
let obj2 = { c: 1, d: 2 };

// Object.assign is used to copy one or more source objects to a target object.

let objCopy = Object.assign({}, obj);
console.log(objCopy);
// Result - { a: 1, b: 2 }

objCopy = Object.assign({}, obj, obj2);
console.log(objCopy);
// Result - { a: 1, b: 2, c: 1, d: 2 }

// when using multiple source objects, if they have props with the same names, the properties will collapse into one on the target object. Its value will be a property value of the latest object
objCopy = Object.assign({}, obj, {a: 3, b: 4});
console.log(objCopy);
// Result - { a: 3, b: 4 }
