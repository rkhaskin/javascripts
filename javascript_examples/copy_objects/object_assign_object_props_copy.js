// Object.assign produces a shallow copy

let obj = {
    a: 1,
    b: {
        c: 2,
    },
}

// primitive properties will be copied by value, but object props will be copied by reference
let newObj = Object.assign({}, obj);
console.log(newObj); // { a: 1, b: { c: 2} }

// only obj.a changes, newObj remains the same (by value)
obj.a = 10;
console.log(obj); // { a: 10, b: { c: 2} }
console.log(newObj); // { a: 1, b: { c: 2} }

// one object changed, both object change (by ref)
newObj.b.c = 30;
console.log(obj); // { a: 10, b: { c: 30} }
console.log(newObj); // { a: 20, b: { c: 30} }