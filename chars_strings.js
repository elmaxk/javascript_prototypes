
// Character coding associated with a script

require("./SCRIPTS");


function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

console.log(characterScript(121));


// Two emoji characters
let horseShoe = "🐴👟";

console.log(horseShoe.length);

console.log(horseShoe[0]);

console.log(horseShoe.charCodeAt(0));

console.log(horseShoe.codePointAt(0));

let roseDragon = "🌹🐉";

for (let char of roseDragon) {
    console.log(char);
}