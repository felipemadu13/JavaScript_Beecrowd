let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let n1 = parseFloat(lines.shift());
let n2 = parseFloat(lines.shift());
let media = (n1 * 3.5 + n2 * 7.5) / 11

console.log('MEDIA = ' + media.toFixed(5))
