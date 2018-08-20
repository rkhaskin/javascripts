// preperties are spread by name. Those properties which are not mentioned before three dots (...) are assigned to a variable after (...)

let { a, b, ...z } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // 1
console.log(b); // 2
console.log(z); // { c: 3, d: 4 }

let { g, f, ...x } = { e: 1, f: 2, g: 3, h: 4 };
console.log(g); // 3
console.log(f); // 2
console.log(x); // { e: 1, h: 4 }