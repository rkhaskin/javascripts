// rest operator is used in functions. It will convert all the arguments passed to a function into the array.
// after that you can use array methods on the args.
const filter = (...args) => {
    return args
     .filter((elem) => elem > 2);
}

const ar2 = filter(6, 3, 4, 2, 1);

console.log(ar2); // [ 6, 3, 4 ]