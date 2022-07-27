let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let r = lines.shift();
let pi = 3.14159

let volume = (4/3.0) * (pi) * (r ** 3);

console.log('VOLUME = ' + volume.toFixed(3))