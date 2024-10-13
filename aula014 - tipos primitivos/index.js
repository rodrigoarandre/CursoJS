// tipos primitivos: string, number, null, undefined, boolean, symbol
const nome = 'Rodrigo'; //string
const nome1 = "Rodrigo"; //string
const nome2 = `Rodrigo`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; // undefined = não aponta para lugar nenhum da memória.
const sobreNomeAluno = null; //nulo = não aponta para lugar nenhum da memória.
const aprovado = true; // valor booleano - pode retornar true ou false (lógico)

console.log(typeof num1, num1); //trás tipo e valor.


//observe

let a = 2;
const b = a;
console.log(a, b);
a = 3;
console.log(a, b);