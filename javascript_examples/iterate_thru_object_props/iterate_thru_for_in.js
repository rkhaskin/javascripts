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

var ar = [];
// This method traverses all enumerable properties of an object and its prototype chain 
for (key in myObj) {
    ar.push(key);
}
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
