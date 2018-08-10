// object property can be anything that can be converted to a string
// all keys in the square bracket notation are converted to String type, since objects in JavaScript can only have String type as key type. 
// For example, in the below code, when the key obj is added to the myObj, JavaScript will call the obj.toString() method, and use this result string as the new key.

var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();
myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';
console.log(myObj);
/*
-- output:
{ type: 'Dot syntax',
  'date created': 'String with space',
  myString: 'String value',
  '0.827951317124443': 'Random Number',
  '[object Object]': 'Object',
  '': 'Even an empty string' }
*/