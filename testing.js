// Testing code

function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
}

test("Convert latin text to uppercase", () => {
    return "hello".toUpperCase() === "HeLLO";
});

test("convert Greek to uppercase", () => {
    return "Χαίρετε".toUpperCase() === "ΧΑΊΡΕΤΕ";
});

test("don't convert care-less characters", () => {
    return "     ".toUpperCase() === "     ";
});

function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        n = Math.floor(n /base);
    } while (n > 0);
    return sign + result;
}

console.log(numberToString(13, 10));


function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() === "left") return "L";
    if (result.toLowerCase() === "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look() {
    if (promptDirection("Which way?") === "L") {
        return "a house";
    } else "a house";
    return "two angry bears";
}

try {
    console.log("You see", look());
} catch (error) {
    console.log("Something went wrong: " + error)

}