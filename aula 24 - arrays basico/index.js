const alunos = ['Luiz', 'Maria', 'João']; //uma lista de nomes de alunos
const alunos1 = ['Luiz', 'Maria', 'João', 1, true, null]; // podemos ter lista envolvendo tipos diferentes de dados sem problemas
const alunos3 = ['Luiz', 'Maria', 'João']; 
console.log(alunos3[0]); //imprime o indíce 0 da lista (array)
alunos3[0] = 'paulo'; //alteração de apenas 1 índice da lista
console.log(alunos3[0]); 
alunos3[3] = 'Jorge'; //se o indíce mencionado não existir, ele será criado na array
console.log(alunos3);
alunos3[alunos3.length] = 'Godoy'; //acrescentando 1 item ao final da array
console.log(alunos3);
alunos3.push('Rodrigo'); //joga um novo elemento ao array, mais simples que o método anterior
console.log(alunos3);
alunos3.push('Pedro'); //acrescenta o item ao final da array
alunos3.unshift('Paulo'); //acrescenta o item ao início da array, alterando todos os índices
alunos3.pop(); // remove o último item do array 
const removido = alunos3.pop(); // guardo o item removido da array num
delete alunos3[1]; // deleto um índice, mas nao altero os outros.
console.log(alunos3.slice(0,2));
console.log(alunos3.slice(0, -2));
console.log(typeof alunos3); //arrays são do tipo objeto
console.log(alunos3 instanceof Array);