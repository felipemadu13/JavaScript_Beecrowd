let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

var x1 = parseFloat(lines.shift());

if (x1 >= 0 && x1 <= 25 ) {
    console.log('Intervalo [0,25]')
} else if (x1 > 25 && x1 <= 50) {
    console.log('Intervalo (25,50]')
} else if (x1 > 50 && x1 <= 75) {
    console.log('Intervalo [50,75]')
} else if (x1 > 75 && x1 <= 100) {
    console.log('Intervalo (75,100]')
} else {
    console.log('Fora de intervalo')
}
