// Filters out elements in an array that don't pass the test

require('./SCRIPTS');

console.log(SCRIPTS);

function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter(SCRIPTS.filter(s => s.direction === "ttb")));


function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction === "rtl");

console.log(map(rtlScripts, s => s.name));