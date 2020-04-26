// Getters and Setters

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};

console.log(varyingSize.size);

console.log(varyingSize.size);

// Setter

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get farenheit() {
        return this.celsius * 1.8 + 32;
    }
    set farenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    static fromFarenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(`Farenheit is: ${temp.farenheit}`);

temp.farenheit = 86;
console.log(`Celsius is: ${temp.celsius}`);