

let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel})
}

addEntry(["work", "touched tree", "pizza", "running",
                 "television", false]);

addEntry(["work", "ice cream", "cauliflower", "lasagna",
                 "touched tree", "brushed teeth"], false);

addEntry(["weekend", "cycling", "break", "peanuts",
                 "beer"], true);

console.log(journal);



function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
                      (table[0] + table[1]) *
                      (table[1] + table[3]) *
                      (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));


function tableFor(event, journal) {
    let table = [0, 0, 0, 0,];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", journal));


for (let entry of journal) {
    console.log(`${entry.events.length} events.`);
}


function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

console.log(journalEvents(journal));

for (let event of journalEvents(journal)) {
    console.log(event + ":", phi(tableFor(event, journal)));
}


for (let event of journalEvents(journal)) {
    let correlation = phi(tableFor(event, journal));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation)
    }
}


for (let entry of journal) {
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brucshed teeth")) {
        entry.events.push("peanut teeth");
    }
}

console.log(phi(tableFor("peanut teeth", journal)));

/*
let journal = [

    {events: ["work", "touch tree", "pizza",
        "running", "television"],
    squirrel: false},

    {events: ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},

    {events: ["weekend", "cycling", "break", "peanuts",
        "beer"],
    squirrel: true}
];

 */


