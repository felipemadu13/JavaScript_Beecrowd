let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let arrayX1Y1 = lines.shift();
let arrayX2Y2 = lines.shift();

let x1y1 = arrayX1Y1.split(' ');
let x2y2 = arrayX2Y2.split(' ');

let x1 = parseFloat(x1y1.shift());
let y1 = parseFloat(x1y1.shift());

let x2 = parseFloat(x2y2.shift());
let y2 = parseFloat(x2y2.shift());

let soma = ((x2 - x1) ** 2) + ((y2 - y1) ** 2)
let distancia = Math.sqrt(soma)

console.log(distancia.toFixed(4))
