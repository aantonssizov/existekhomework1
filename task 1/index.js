let x = 6;
let y = 15;
let z = 4;

x += y-x++*z;
document.write(x + "<br/>");

z = --x-y*5;
document.write(z + "<br/>");

y = x+5%z;
document.write(y + "<br/>");

z = x++ +y*5;
document.write(z + "<br/>");

x = y-x++ *z;
document.write(x + "<br/>");