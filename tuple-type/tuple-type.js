"use strict";
// ===> Exemplo 01 - Uso simples de Tuplas em TypeScript:
let pessoa;
pessoa = ['Wanderson', 'Programador', 23];
// pessoa = [23, 'Wanderson', 'Programador'] // A ordem importa: ERROR;
console.log(pessoa);
// ===> Exemplo 02 - Acessando o valor da Tupla:
console.log(pessoa[0]);
// ===> Exemplo 03 - Outra forma de usar Tuplas em TypeScript (labels):
let pessoa2;
pessoa2 = ['Wanderson', 'Programador', 23];
console.log(pessoa2);
// ===> Exemplo 04 - Usando Tuplas com Spread Operator:
// Dessa forma indico que todos os itens seguintes são string também
let frutas = ['Maçã', 'Banana', 'Laranja'];
console.log(...frutas);
// ===> Exemplo 05 - Lista Heterogênea de Tupla:
let frutas2 = [5, true, ...frutas];
console.log(frutas2);
// ===> Exemplo 06 - Uso de função Tuplas:
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Wanderson', 'Santos'], [23, 52]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Wanderson', 'Santos', 'Torres'));
