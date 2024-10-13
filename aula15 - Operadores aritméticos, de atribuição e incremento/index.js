/*
adição e concatenação +
subtração - 
divisão /
multiplicação *
potenciação **
resto da divisão % 
*/

/* ORDEM DAS PRECEDENCIAS
1 ()
2 **
3 * / %       Nesse caso, será seguido a ordem. da esquerda para a direita.
4 + -

PRÉ/PÓS INCREMENTO -> ++
PRÉ/PÓS DECREMENTO -> -- 
*/




const num1 = 5;
const num2 = 10;
console.log(num1 + num2); //adição

const num3 = 15;
const num4 = '5';
console.log(num3 + num4); //concatenação //Nesse caso, o JS vai converter a string num4 para conseguir entregar o resultado. 5 + 13


let contador = 10;
console.log(contador++); //acrescenta um valor a variável, mas não cria expressa nesse momento.  PÓS
console.log(contador);

console.log(++contador); //acrescenta um valor a variável, expressando no mesmo instante. PRÉ


const passo = 2;
let contador1 = 10;
contador1 += passo;
contador1 += passo;
contador1 += passo; // isso é o mesmo que contador + ele mesmo + valor de passo
console.log(contador1);

let num = '5.2';
let numInt = parseInt(num); //Conversão de String para numero Inteiro
console.log(numInt);
let numFloat = parseFloat(num); //Conversão de String para número Flutuante
console.log(numFloat);

let numNum = '5.7';
let newNum = Number(numNum); // faz a conversão do jeito que ele 



