// Time and day function

const weekDay = function () {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                   "Thursday", "Friday", "Saturday", "Sunday"];

    return {
        name(number) { return names[number]; },
        number(name) { return names.indexOf(name); }
    };
}();

console.log(weekDay.name(weekDay.number("Sunday")));


const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function (date, format) {
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if (tag === "YYYY") return date.getFullYear();
        if (tag === "M") return date.getMonth();
        if (tag === "MMMM") return months[date.getMonth()];
        if (tag === "D") return date.getDate();
        if (tag === "Do") return ordinal(date.getDate());
        if (tag === "dddd") return days[date.getDay()];
    });
};

const {formatDate} = require("format-date");

console.log(formatDate(new Date(2020, 8, 4),
                                "dddd the Do"));


require.cache = Object.create(null);

function require(name) {
    if (!(name in require.cache)) {
        let code = readFile(name);
        let module = {exports: {}};
        require.cache[name] = module;
        let wrapper = Function("require, exports, module", code);
        wrapper(require, module.exports, module);
    }
    return require.cache[name].exports;
}

import reliableMultiply from "./assertions";
console.log(reliableMultiply(5, 9))