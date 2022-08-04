let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let tempo = lines.shift();

let tempoHr = parseInt(tempo / 3600);
tempo = tempo % 3600;

let tempoMin = parseInt(tempo / 60);
tempo = tempo % 60;

console.log(`${tempoHr}:${tempoMin}:${tempo}`)
