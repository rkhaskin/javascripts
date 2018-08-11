// deep copy operation
let obj = {
    a: 1,
    b: {
        c: 2,
    },
}
// this is the deep copy
let newObj = JSON.parse(JSON.stringify(obj));

// old object changes, new object intact
obj.b.c = 20;
console.log(obj); // { a: 1, b: { c: 20 } }
console.log(newObj); // { a: 1, b: { c: 2 } } (New Object Intact!)