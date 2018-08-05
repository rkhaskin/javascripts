// You can use apply to chain constructors for an object, similar to Java. 
//In the following example we will create a global Function method 
//called construct, which will enable you to use an array-like object 
//with a constructor instead of an arguments list.

// different ways to add a function on the prototype

// using newer Object.create
Function.prototype.construct = function (aArgs) {
    // create a new object and attach a prototype of the caller function
    console.log('started Function.prototype.construct');
    var oNew = Object.create(this.prototype);
    console.log('after Object.create');
    // convert array to args and calls the function
    this.apply(oNew, aArgs);
    console.log('after this.apply');

    return oNew;
};

// using __proto__
Function.prototype.construct2 = function (aArgs) {
    var oNew = {};
    oNew.__proto__ = this.prototype;
    this.apply(oNew, aArgs);
    return oNew;
};

// using closure  
Function.prototype.construct3 = function (aArgs) {
    var fConstructor = this, fNewConstr = function () {
        fConstructor.apply(this, aArgs);
    };
    fNewConstr.prototype = fConstructor.prototype;
    return new fNewConstr();
};

// Using the Function constructor:
Function.prototype.construct4 = function (aArgs) {
    var fNewConstr = new Function("");
    fNewConstr.prototype = this.prototype;
    var oNew = new fNewConstr();
    this.apply(oNew, aArgs);
    return oNew;
};

