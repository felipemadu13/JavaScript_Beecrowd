let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

var distancia = parseInt(lines.shift());
var combustivel = parseFloat(lines.shift());
var consumo = distancia / combustivel

console.log(`${consumo.toFixed(3)} km/l`)