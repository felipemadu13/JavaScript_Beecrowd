let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(' ');

let n1 = parseFloat(lines.shift());
let n2 = parseFloat(lines.shift());
let n3 = parseFloat(lines.shift());

let a = n1.toFixed(3);
let b = n2.toFixed(3);
let c = n3.toFixed(3);

let delta = b**2 - 4 * a * c

if (delta < 0 || a == 0) {
    console.log(`Impossivel calcular`)
} else{
    let bhaskara1 = (-b + Math.sqrt(delta)) /  (2 * a)
    let bhaskara2 = (-b - Math.sqrt(delta)) / (2 * a)

console.log(`R1 = ${bhaskara1.toFixed(5)}`);
console.log(`R2 = ${bhaskara2.toFixed(5)}`);
}

