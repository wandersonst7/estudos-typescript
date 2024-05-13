"use strict";
// ===> Exemplos: number
let num1 = 23.0;
let num2 = 0x78CF;
let num3 = 0o577;
let num4 = 0b110001;
console.log('Number - Ponto Flutuante...: ' + num1);
console.log('Number - Hexadecimal...: ' + num2);
console.log('Number - Octal...: ' + num3);
console.log('Number - Binário...: ' + num4);
// ===> Exemplos: bigint
// Necessário alterar "target" do tsconfig.json para es2020 ou esnext 
let big1 = 90124412441194499002n;
let big2 = 0x20000000000000003n;
console.log('Bigint - Ponto Octal...: ' + big1);
console.log('Bigint - Hexadecimal...: ' + big2);
