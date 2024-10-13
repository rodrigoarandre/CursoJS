//let num1 = 0.7; //number
//let num2 = 0.1; //number

//num1 += num2; //0.8
//num1 += num2; //0.9
//num1 += num2; //1.0

//num1 = ((num1 * 100) + (num2 * 100)) / 100;   Forma matemática de precisão do número flutuante


//num1 = parseFloat(num1.toFixed(2));   Funcionaria para dar precisão ao número float.
//num1 = Number(num1.toFixed(2));  Também funcionária

//console.log(num1);
//console.log(Number.isInteger(num1));

//console.log(num1.toString() + num2);      Nesse caso, o + irá funcionar como concatenador e n como somador.
//num1 = num1.toString();       Irá converter definitivamente a variável Num1 para uma string.
// console.log(num1.toString(2)); Irá trazer a representação binária de Num1
//console.log(num1.toFixed(2)); Irá converter um número fload com 2 casas decimais.
//console.log(Number.isInteger(num1));  Irá retornar TRUE ou FALSE para número inteiro.
//console.log(Number.isNaN(variável));  Irá retornar TRUE se a conta não for verdadeira, ou seja, não é um NaN

let num1 = 0.7;
let num2 = 0.1;
num1 += num2;
console.log(num1);
