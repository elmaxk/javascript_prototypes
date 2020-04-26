// Debugging Chapter 8

function canYouSpotTheProblem() {
    "use strict";
    for (let counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}

canYouSpotTheProblem();

function counters(counterz) {
    "use strict";
    for (let count = 0; counterz < 25; counterz++) {
        if (counterz %2 === 0) {
            console.log(`Fizz: ${counterz}`)
        }
        if (counterz %2 !== 0) {
            console.log(`Bang: ${counterz}`)
        }
    }
}

counters(0);