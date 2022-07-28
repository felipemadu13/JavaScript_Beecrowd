let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(' ')

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());
let maiorAb = (a + b + Math.abs(a - b)) / 2


if (maiorAb < c) {
    maiorNumero = c;
} else {
    maiorNumero = maiorAb;
}


console.log(`${maiorNumero} eh o maior`)