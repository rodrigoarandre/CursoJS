/*
+ -> adição ou concatenação
* -> multiplicação
** -> potenciação
% -> resto da divisão

ordem de precedência:
()
**
* / %
+ -

*/

const num1 = 5;
const num2 = 10;
console.log(num1 + num2); //Exemplo de adição = 15

const num3 = '5';
const num4 = '10';
console.log(num3 + num4); //Exemplo de concatenação = 510


let contador = 1;
contador++; //irá acrescentar mais 1 em contador. ou seja, contador passa a ser: 2

++contador; //

//Observe: 
let contador2 = 1;
console.log(contador2++); //adiciona e não retorna nessa linha
console.log(contador2);

let contador3 = 1;
console.log(++contador3); // adicionar e retorna.

/* 
INCREMENTE = ++
DECREMENTO = --
*/

let contador5 = 0;
contador5 += 2; // é igual à -> contador = contador + 2;
console.log(contador5)

let contador6 = 3;
contador6 *= 2; // é igual à -> contador = contador + 2;
console.log(contador6)



const num5 = 10;
const num6 =  parseInt('5.2'); // Converte a string '5.2' para um número inteiro 5
console.log(num5 + num6); // resultado = 15
 
const num7 = 11;
const num8 = parseFloat('5.2'); //Converte a string em um número flutuante (com casa decimal)
console.log(num7 + num8); //Resultado = 16.5

const num9 = 12;
const num10 = Number('5');
console.log(num9 + num10); //Resultado = 17





