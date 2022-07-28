let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(' ')

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());
let pi = 3.14159

let triangulo = (a * c) / 2
let circulo = pi * (c * c)
let trapezio = (a + b) * c / 2
let quadrado = b * b
let retangulo = a * b

console.log('TRIANGULO: ' + triangulo.toFixed(3))
console.log('CIRCULO: ' + circulo.toFixed(3))
console.log('TRAPEZIO: ' + trapezio.toFixed(3))
console.log('QUADRADO: ' + quadrado.toFixed(3))
console.log('RETANGULO: ' + retangulo.toFixed(3))

