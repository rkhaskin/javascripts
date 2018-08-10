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


function showProps(obj, objName) {
    var result = '';
    for (var i in obj) {
        // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
        if (obj.hasOwnProperty(i)) {
            result += objName + '.' + i + ' = ' + obj[i] + '\n';
        }
    }
    return result;
}

var res = showProps(myObj, "myObj");
console.log(res);
  /* -- output
  myObj.type = Dot syntax
myObj.date created = String with space
myObj.myString = String value
myObj.0.6548516340124222 = Random Number
myObj.[object Object] = Object
myObj. = Even an empty string
  */