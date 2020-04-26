
function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}

console.log("Random point on a circle:\n", randomPointOnCircle(2));

console.log(Math.floor((Math.random() * 10)));


function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
                      (n01 + n11) * (n00 + n10));
}

console.log(phi([4, 5, 8, 11]));