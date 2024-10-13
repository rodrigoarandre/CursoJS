/* Regras Para as Constantes:
1 - Não podemos cira constantes com palavras reservadas
2 - Constantes precisam ter nomes siginificativos
3 - Não pode começar o nome de uma consante com um númnero
4 - Não pode conter espaços ou traços
5 - Utilizamos CamelCase
6 - Case-Sensitive
7- Não pode modificar o valor da uma constante
8 - Não utilize VAR, utilize CONST
*/

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado)
// ou seja, é mais interessante ir evoluindo o valor de uma const, ao invés de criar um variável e correr o risco de perde-lá qd precisar evoluí-lá.

const numeroNumber = 3;
const numeroString = '3';

// podemos usar o seguinte código para descobrir a tipagem de uma const ou let

console.log(typeof numeroNumber)
console.log(typeof numeroString)

//Observe:
console.log(numeroNumber + numeroString)
console.log(typeof (numeroNumber + numeroString))
console.log(typeof (numeroString + numeroNumber))

// havendo uma string , o JS irá considerar tudo como string, para que seja um NUMBER as 2 constantes deveriam ser do type NUMBER.
