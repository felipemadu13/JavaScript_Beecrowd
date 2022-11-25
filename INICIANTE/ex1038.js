let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(' ');

var codigo = parseInt(lines.shift());
var quantidade = parseInt(lines.shift());
var preco = "";

switch(codigo) {
    case 1:
        preco = 4.00;
        break;
    case 2:
        preco = 4.50;
        break;
    case 3:
        preco = 5.00;
        break;
    case 4:
        preco = 2.00;
        break;
    case 5:
        preco = 1.50;
        break;
    default:
        preco = 0.00;
}

var total = preco * quantidade;
console.log(`Total: R$ ${total.toFixed(2)}`);