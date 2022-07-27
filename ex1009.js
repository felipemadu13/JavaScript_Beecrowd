let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let nome = lines.shift()
let salario = parseFloat(lines.shift())
let vendas = parseFloat(lines.shift())
let comissao = vendas * 0.15
let total = salario + comissao


console.log('TOTAL = R$ ' + total.toFixed(2))