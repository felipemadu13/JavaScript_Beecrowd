let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let number = parseInt(lines.shift());
let horas = parseInt(lines.shift());
let valorHora = parseFloat(lines.shift());

let salary = horas * valorHora

console.log('NUMBER = ' + number)
console.log('SALARY = U$ ' + salary.toFixed(2))