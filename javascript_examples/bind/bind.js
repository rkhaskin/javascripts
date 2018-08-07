// bind makes a copy of a function and associates it with whatever is passed as "this"

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullname: function () {
        // by default, "this" points to the person object
        return this.firstname + ' ' + this.lastname;
    }
}

// bind "this" inside the function to the person object, which has getFullname method
// without bind, "this" will point to the global object and the call will error

var logName = function (lang1, lang2) {
    console.log('Logged ' + this.getFullname());
}.bind(person);

logName();

//----------------------------

var logName2 = function (lang1, lang2) {
    console.log('Logged 2 ' + this.getFullname());
}

// bind copies the function logName2 into copiedlogName2. The arg to bind is whatever object I want to be "this"
var copiedlogName2 = logName2.bind(person);
// now new function "this" variable points to person
copiedlogName2('en', 'es');