//#A012 10. Exercícios - Const e Let
const nome = 'Nome';
const peso = 84;
const idade = 30;
const altura = 1.8;
let imc;
let anoNascimento;
anoNascimento = 2024 - idade;
imc = peso / (altura * altura);

//Template Strings
console.log (`Nome: ${nome}\n O peso atualo é: ${peso}\n A idade é: ${idade}\n A altura é: ${altura}\n O ano de nascimento é: ${anoNascimento}\n O imc atual é: ${imc}`);
