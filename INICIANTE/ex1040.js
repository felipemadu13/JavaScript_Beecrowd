let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(' ');
let linha = input.split('\n');

let n1 = parseFloat(lines.shift());
let n2 = parseFloat(lines.shift());
let n3 = parseFloat(lines.shift());
let n4 = parseFloat(lines.shift());

let exame1 = parseFloat(linha.shift())
let exame = parseFloat(linha.shift());

let media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10;
let mediaExame = (media + exame) / 2;


if (media < 5.0) {
    console.log(`Media: ${media.toFixed(1)}`);
    console.log('Aluno reprovado.');
} else if (media >= 7.0) {
    console.log(`Media: ${media.toFixed(1)}`);
    console.log('Aluno aprovado.');
} else {
    console.log(`Media: ${media.toFixed(1)}`);
    console.log('Aluno em exame.');
    console.log(`Nota do exame: ${exame.toFixed(1)}`);
    if (mediaExame >= 5.0) {
        console.log('Aluno aprovado.');
        console.log(`Media final: ${mediaExame.toFixed(1)}`);
    } else {
        console.log('Aluno reprovado.');
        console.log(`Media final: ${mediaExame.toFixed(1)}`);
    }
    
}
