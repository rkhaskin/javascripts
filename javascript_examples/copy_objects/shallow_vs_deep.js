// object contains only primitives. Shallow copy is enough
let obj = { a: 1, b: 2 };


// object contains primitives and objects. To copy this object will require deep copy. Shallow copy copies reference to the inner object
let obj = {
    a: 1,
    b: {
        c: 2,
    },
}