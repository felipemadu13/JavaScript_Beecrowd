let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');
    
let n = parseFloat('3.14159')
let a = parseFloat(lines.shift());
let area = (n * (a * a));
   
console.log('A=' + area.toFixed(4));