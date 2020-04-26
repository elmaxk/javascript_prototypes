

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "running"]
};

console.log(day1.squirrel);

console.log(day1.wolf);

day1.wolf = false;

console.log(day1.wolf);

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

console.log(descriptions);

let anObject = {left: 1, right: 2};

console.log(anObject.left);
console.log("left" in anObject);

delete anObject.right;

console.log("right" in anObject);


console.log(Object.keys({x: 0, y: 0, z: 2}));

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});

console.log(objectA);