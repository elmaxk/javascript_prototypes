// Reduce function


function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

console.log([1, 2, 3, 4].reduce((a, b) => a + b));

require('./SCRIPTS');

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));


// Finding the biggest script

let biggest = null;
for (let script of SCRIPTS) {
    if (biggest === null ||
            characterCount(biggest) < characterCount(script)) {
        biggest = script
    }
}

console.log("The biggest is: ");
console.log(biggest);


// Average of living and dead scripts in the data set

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

console.log("Average age of dead scripts.");
console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year)
)));


console.log("Average age of living scripts.");
console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year)
)));


// Computation of living and dead scripts average

let total = 0, count = 0;

for (let script of SCRIPTS) {
    if (script.living) {
        total += script.year;
        count += 1;
    }
}

console.log("Average age of dead scripts computation");
console.log(Math.round(total / count));