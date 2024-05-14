"use strict";
// ===> Exemplo 01 - Uso de Colchetes:
let frutas = ['Maçã', 'Banana', 'Laranja', 'Abacaxi', 'Manga'];
console.log(frutas[0]);
// ===> Exemplo 02 - Array Object (Objeto Array):
let frutas2 = ['Maçã', 'Banana', 'Laranja', 'Abacaxi', 'Manga'];
console.log(frutas[2]);
// ===> Exemplo 03 - Adicionando mais strings com método push:
let idiomas = ['Inglês', 'Português'];
idiomas.push('Francês');
console.log(idiomas);
// ===> Exemplo 04 - Identificar tamanho do array - método 'length':
let idiomas1 = ['Inglês', 'Português'];
console.log(idiomas.length);
// ===> Exemplo 05 - Exemplo de Array com Spread Operator:
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// ===> Exemplo 06 - Exemplo de Array com laço de iteração:
let linguagensArray = new Array('JavaScript', 'PHP', 'Java');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(`${i + 1} - ${linguagens[i]}`);
    }
}
funcaoLinguagens(linguagensArray);
