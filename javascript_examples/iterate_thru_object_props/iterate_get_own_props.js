var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();
myObj.type = 'Dot syntax';
myObj['date created'] = 'String with space';
myObj[str] = 'String value';
myObj[rand] = 'Random Number';
myObj[obj] = 'Object';
myObj[''] = 'Even an empty string';

// This method returns an array containing all own properties' names (enumerable or not) of an object
var ar = Object.getOwnPropertyNames(myObj);
console.log(ar);
// -- output
/*
[ 'type',
  'date created',
  'myString',
  '0.7082398142464101',
  '[object Object]',
  '' ]
*/
