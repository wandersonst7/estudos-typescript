// ===> Exemplo 01 - Uso simples de Tuplas em TypeScript:
let pessoa: [string, string, number];
pessoa = ['Wanderson', 'Programador', 23];

// pessoa = [23, 'Wanderson', 'Programador'] // A ordem importa: ERROR;

console.log(pessoa);

// ===> Exemplo 02 - Acessando o valor da Tupla:
console.log(pessoa[0])

// ===> Exemplo 03 - Outra forma de usar Tuplas em TypeScript (labels):
let pessoa2: [nome: string, profissao: string, idade: number];
pessoa2 = ['Wanderson', 'Programador', 23];

console.log(pessoa2);

// ===> Exemplo 04 - Usando Tuplas com Spread Operator:
// Dessa forma indico que todos os itens seguintes são string também
let frutas: [string, ...string[]] = ['Maçã', 'Banana', 'Laranja']
console.log(...frutas)

// ===> Exemplo 05 - Lista Heterogênea de Tupla:
let frutas2: [number, boolean, ...string[]] = [5, true, ...frutas];
console.log(frutas2)

// ===> Exemplo 06 - Uso de função Tuplas:
function listarPessoas(nomes: string[], idades: number[]){
    return [...nomes, ...idades]
}

let resultado = listarPessoas(['Wanderson', 'Santos'], [23, 52]);
console.log(resultado)

// ===> Exemplo 07 - Labeled Tuples com Spread Operator numa função:
type Nome = 
            | [primeiroNome: string, sobrenome: string]
            | [primeiroNome: string, nomeMeio: string, sobrenome: string];

function criarPessoa(...nome: Nome){
    return [ ...nome];
}

console.log(criarPessoa('Wanderson', 'Santos', 'Torres'))


