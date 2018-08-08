// In addition to the individual array element, the callback also has access to the index of the current element and the full array, like so:

var sidekicks = [
    { name: "Robin",     hero: "Batman"   },
    { name: "Supergirl", hero: "Superman" },
    { name: "Oracle",    hero: "Batman"   },
    { name: "Krypto",    hero: "Superman" }
];

var filtered = sidekicks.filter(function (el, index, arr) {
    return el.name.length > 5;
});

console.log(filtered);
