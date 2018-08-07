var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullname: function () {
        // by default, "this" points to the person object
        return this.firstname + ' ' + this.lastname;
    }
}

// this function does not have the method getFullname
var person2 = {
    firstname: 'Jane',
    lastname: 'Smith',
}

// call getFullname, but make "this" inside the getFullname point to person2
var fullname = person.getFullname.apply(person2);
console.log(fullname);

// call getFullname, but make "this" inside the getFullname point to person2. Will work with apply and with call
var fullname2 = person.getFullname.call(person2);
console.log(fullname2);