const person = {
    name:  "Max"
}

// copy object person into newPerson and add a new property to the newPerson object
const newPerson = {
    ...person,
    age: 56
}

console.log(newPerson);