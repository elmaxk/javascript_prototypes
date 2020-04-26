function wrapValue(n) {
    let local = n;
    return () => local;
}
    let wrap1 = wrapValue(1);
    let wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());


function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));


// Recursive function

console.log('Recusive function');

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log("Calling Power function: ");
console.log(power(2,6));

// Recusive func 2

function findSolution(target) {
    function find(current, history) {
        if (current === target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));


// Cow and chicken function

function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11);

// Refactored with more animals

console.log("Refactored function adding pigs");

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory2(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory2(7, 11, 3);


// Refactored function

console.log("Refactored function cleaning up.");

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory3(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory3(9, 33, 15);

// Exercises

console.log("Exercises math min function");

function maths(x, y) {

    return console.log(Math.min(x, y))

}

maths(-25, -55);