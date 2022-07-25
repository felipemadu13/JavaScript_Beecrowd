var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var n = parseFloat('3.14159')
var a = parseFloat(lines.shift());
var area = (n * (a * a));
   
console.log('A=' + area.toFixed(4));