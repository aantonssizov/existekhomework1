const PI = 3.14;

var h = prompt("Enter height");
var r = prompt("Enter radius");

h = parseFloat(h);
r = parseFloat(r);

let v = PI * (r * r) * h;
let s = 2 * PI * r * (h + r);

console.log("V = " + v);
console.log("S = " + s);