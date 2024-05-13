// ===> Exemplos: number
let num1: number = 23.0;
let num2: number = 0x78CF;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log('Number - Ponto Flutuante...: ' + num1);
console.log('Number - Hexadecimal...: ' + num2);
console.log('Number - Octal...: ' + num3);
console.log('Number - Binário...: ' + num4);

// ===> Exemplos: bigint
// Necessário alterar "target" do tsconfig.json para es2020 ou esnext 
let big1: bigint = 90124412441194499002n;
let big2: bigint = 0x20000000000000003n;

console.log('Bigint - Ponto Octal...: ' + big1);
console.log('Bigint - Hexadecimal...: ' + big2);