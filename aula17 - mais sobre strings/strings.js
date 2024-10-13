let umaString = "Um texto";
// let umaString = "Um 'texto'"; -> Podemos colocar dessa forma para scapar um caracter especial
// let umaString = "Um "\texto"\"; -> Podemos scapar string desse jeito
console.log(umaString[1]); //retornará o índice dessa string, se tiver fora do ranged, retornara UNDEFINED
console.log(umaString.concat(' concatenado', ' com outro'));
console.log(`Escrito em ${umaString}`);
console.log(umaString.indexOf('texto')); //busca o índice de  início dessa string
console.log(umaString.indexOf('t', 4)); //busca o índice de t, à partir do índice 4. Caso não encontre, retornará -1
console.log(umaString.lastIndexOf('o')); //busca o índice de trás para frente. 
console.log(umaString.replace('texto', 'escrito')); //substitui o primeiro argumento pelo segundo.
umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.replace(/r/g, '%')); //substitui todos os 'r' por '%'
console.log(umaString.length); // retorna o tamanho da string
console.log(umaString.slice(0, 6)); //fatia parte da string, entre o 1º e o 2º argumento
console.log(umaString.slice(-5)); // starta o fatiamento de trás dos últimos índices
console.log(umaString.split(' ')); //fatiará todas a string, considerando os espaços como delimitador, retornando uma array
console.log(umaString.split(' ', 2)); // a msm coisa, porém, criando uma array com os primeiros 2 matchs
console.log(umaString.toUpperCase()); //retorna tudo em caixa alta
console.log(umaString.toLowerCase()); // retorna tudo em caixa baixa
