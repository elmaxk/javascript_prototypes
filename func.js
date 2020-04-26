const makeNoise = function() {
    console.log("Pling!");
};
makeNoise(); // → Pling!

const power = function(base, exponent = 3) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(2));


// New function for hummus

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };

    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

console.log(hummus(2));

// New function

console.log("The future says: ", future());

function future() {
    return "You will see flying cars";
}

// New function

const powers = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(powers(2, 6))


// new func

function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");