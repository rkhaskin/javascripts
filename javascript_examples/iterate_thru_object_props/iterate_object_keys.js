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

// returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object o
var ar = Object.keys(myObj);
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
