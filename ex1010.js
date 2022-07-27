let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let linha1 = lines.shift();
let linha2 = lines.shift();

let produto1 = linha1.split(' ');

let codigoPeca1 = parseInt(produto1.shift());
let numeroPeca1 = parseInt(produto1.shift());
let valorPeca1 = parseFloat(produto1.shift());
let total1 = numeroPeca1 * valorPeca1

let produto2 = linha2.split(' ');

let codigoPeca2 = parseInt(produto2.shift());
let numeroPeca2 = parseInt(produto2.shift());
let valorPeca2 = parseFloat(produto2.shift());
let total2 = numeroPeca2 * valorPeca2

let valorTotal = total1 + total2

console.log('VALOR A PAGAR: R$ ' + valorTotal.toFixed(2))