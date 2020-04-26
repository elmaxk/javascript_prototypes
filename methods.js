
// Method examples

let rabbit = {};
rabbit.speak = function (line) {
    console.log(`The rabbit say '${line}'`);
};

rabbit.speak("I'm alive.");

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh me ears and whiskers, " +
                        "how late it's gettting!");

hungryRabbit.speak("I could use a carrot right now.");

speak.call(hungryRabbit, "Burp!");

function normalize() {
    console.log((this.coords.map(n => n / this.length)));
}

normalize.call({coords: [0, 2, 3], length: 5});


let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit say '${line}'`);
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEE");

function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

weirdRabbit.speak("yeee");


class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

class MatricIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y === this.matrix.height) return {done: true};

        let value = {x: this.x,
                     y: this.y,
                     value: this.matrix.get(this.x, this.y)};

        this.x++;
        if (this.x === this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}


Matrix.prototype[Symbol.iterator] = function () {
    return new MatricIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
    console.log(x, y, value);
}

// Symbols

let sym = Symbol("name");
console.log(sym === Symbol("name"));

Rabbit.prototype[sym] = 55;
console.log(whiteRabbit[sym]);


const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function () {
    return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());

console.log([1, 2][toStringSymbol]());

let stringObject = {
    [toStringSymbol]() { return "a jute rope"; }
};

console.log(stringObject[toStringSymbol]());


let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());

console.log(okIterator.next());

console.log(okIterator.next());


class Matrix1 {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }

    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y === this.matrix.height) return {done: true};

        let value = {x: this.x,
                     y: this.y,
        value: this.matrix.get(this.x, this.y)};

        this.x++;
        if (this.x === this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}

Matrix1.prototype[Symbol.iterator] = function () {
    return new MatricIterator(this);
};

let matrix1 = new Matrix1(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix1) {
    console.log(x, y, value);
}