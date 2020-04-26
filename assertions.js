// Assertions


function firstElement(array) {
    if (array.length === 0) {
        throw new Error("firstElement called with []");
    }
    return array[0];
}

console.log(firstElement([4, 3, 5,]));


class MultiplicationUnitFailure extends Error{}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicationUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    for (;;) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (!(e instanceof  MultiplicationUnitFailure))
                throw e;
        }
    }
}

console.log(reliableMultiply(5, 9));