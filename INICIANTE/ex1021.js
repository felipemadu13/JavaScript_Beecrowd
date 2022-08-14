let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n')

let dinheiro = lines.shift();
// DIVISÃO DAS NOTAS
let notas100 = parseInt(dinheiro / 100);
let notas050 = 0;
let notas020 = 0;
let notas010 = 0;
let notas005 = 0;
let notas002 = 0;
let moedas100 = 0;

// DIVISÃO DAS MOEDAS
let moedas = parseFloat(dinheiro) - parseInt(dinheiro) 
let moedas050 = 0;
let moedas025 = 0;
let moedas010 = 0;
let moedas005 = 0;
let moedas001 = 0;

// CALCULO DAS NOTAS
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
    moedas100 = parseInt(restante / 1)
    restante = (restante - (moedas100 * 1))
}
// CALCULO DAS MOEDAS

if (moedas >= 0.50) {
    moedas050 = parseInt(moedas / 0.50)
    moedas = (moedas - (moedas050 * 0.50))
} 

if (moedas >= 0.25) {
    moedas025 = parseInt(moedas / 0.25)
    moedas = (moedas - (moedas025 * 0.25))
} 

if (moedas >= 0.10) {
    moedas010 = parseInt(moedas / 0.10)
    moedas = (moedas - (moedas010 * 0.10))
}

if (moedas >= 0.05) {
    moedas005 = parseInt(moedas / 0.05)
    moedas = (moedas - (moedas005 * 0.05))
} 

if (moedas >= 0.01) {
    moedas001 = parseInt(moedas / 0.01)
    moedas = (moedas - (moedas001 * 0.01))
}

// SAIDA DAS NOTAS
console.log('NOTAS:')
console.log(`${notas100} nota(s) de R$ 100,00`)
console.log(`${notas050} nota(s) de R$ 50,00`)
console.log(`${notas020} nota(s) de R$ 20,00`)
console.log(`${notas010} nota(s) de R$ 10,00`)
console.log(`${notas005} nota(s) de R$ 5,00`)
console.log(`${notas002} nota(s) de R$ 2,00`)

// SAIDA DAS MOEDAS
console.log('MOEDAS:')
console.log(`${moedas100} moeda(s) de R$ 1.00`)
console.log(`${moedas050} moeda(s) de R$ 0.50`)
console.log(`${moedas025} moeda(s) de R$ 0.25`)
console.log(`${moedas010} moeda(s) de R$ 0.10`)
console.log(`${moedas005} moeda(s) de R$ 0.05`)
console.log(`${moedas001} moeda(s) de R$ 0.01`)

