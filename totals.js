
let total = 0, count = 1;
while (count <= 25) {
    total += count;
    count += 1;
}
console.log(total);

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}
repeatLog(33);

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(4, console.log);

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});

console.log(labels);

function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));


function noisy(f) {
    return (...args) => {
        console.log("Calling with", args);
        let result = f(...args);
        console.log("Called with", args, ", returned", result);
        return result;
    }
}

noisy(Math.min)(3, 2, 1);


function unless(test, then) {
    if (!test) then();
}

repeat(3, n => {
    unless((n % 2 === 1, () => {
        console.log(n, "is even");
    }));
});
