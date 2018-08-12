// BAD Code

const DataArray = require('../models/DataArray');
let newReleases = DataArray.newReleases;
console.log(newReleases, "----------------------------");

// execute for each occurance - EXTREMELY DANGEROUS. NEVER UPDATE AN ARRAY, CREATE A NEW ONE
newReleases.forEach(function (elem) {
    elem.id = "UUU";
})


console.log(newReleases);