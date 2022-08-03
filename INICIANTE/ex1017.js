let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let tempo = Number(lines.shift());
let velocidadeMedia = Number(lines.shift());
let distancia = tempo * velocidadeMedia
let consumo = distancia / 12

console.log(consumo.toFixed(3))



