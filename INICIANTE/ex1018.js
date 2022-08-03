let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n')

let dinheiro = lines.shift();
let notas100 = parseInt(dinheiro / 100);
let notas050 = 0;
let notas020 = 0;
let notas010 = 0;
let notas005 = 0;
let notas002 = 0;
let notas001 = 0;

let restante = (dinheiro - (notas100 * 100))

if (restante >= 50) {
    notas050 = parseInt(restante / 50)
    restante = (restante - (notas050 * 50))
} 

if (restante >= 20) {
    notas020 = parseInt(restante / 20)
    restante = (restante - (notas020 * 20))
}

if (restante >= 10) {
    notas010 = parseInt(restante / 10)
    restante = (restante - (notas010 * 10))
}

if (restante >= 5) {
    notas005 = parseInt(restante / 5)
    restante = (restante - (notas005 * 5))
}

if (restante >= 2) {
    notas002 = parseInt(restante / 2)
    restante = (restante - (notas002 * 2))
}

if (restante >= 1) {
    notas001 = parseInt(restante / 1)
    restante = (restante - (notas001 * 1))
}

console.log(dinheiro)
console.log(`${notas100} nota(s) de R$ 100,00`)
console.log(`${notas050} nota(s) de R$ 50,00`)
console.log(`${notas020} nota(s) de R$ 20,00`)
console.log(`${notas010} nota(s) de R$ 10,00`)
console.log(`${notas005} nota(s) de R$ 5,00`)
console.log(`${notas002} nota(s) de R$ 2,00`)
console.log(`${notas001} nota(s) de R$ 1,00`)

