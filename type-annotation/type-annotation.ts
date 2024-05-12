// ===> Variáveis
let nome: string = 'Wanderson';
console.log(nome);

// ===> Arrays
let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);

// ===> Objetos
let carro: {
    nome: string,
    ano: number,
    preco: number
}

carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000 }
console.log(carro);

// ===> Funções
function somaNumeros(num1: number, num2: number){
    return num1 + num2;
}
console.log(somaNumeros(2, 5))