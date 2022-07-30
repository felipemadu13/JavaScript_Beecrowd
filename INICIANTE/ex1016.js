let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let distancia = Number(lines.shift());
let diferencaDeVelocidade = Number(2);
let tempo = distancia * diferencaDeVelocidade;


console.log(`${tempo} minutos`)