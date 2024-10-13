/*#A010  let nome = 'Rodrigo'  reservando variável para o valor string 'Rodrigo'
 console.log('Meu nome é: ', nome) // trazendo o variável ao invés de escrever o nome.

 podemos reservar uma variável, sem inserir um valor nela, e posteriormente, inserir um valor. */

let nome; // variável reservada, sem valor inserido (VARIÁVEL DECLARADA)
nome = 'Rodrigo'; // inserindo um valor para a variável que antes estava apenas reservada (INICIALIZANDO A VARIÁVEL)
console.log('Meu nome é:', nome);
nome = 'Araujo' // podemos mudar o valor dessa variável reservada, a qualquer momento.
console.log('Meu nome é:',nome);

// let nome; // isso irá gerar um erro, pois não podemos reservar uma variável já reservada antes.


/* 
                REGRAS PARA A UTILIZAÇÃO DAS VARIÁVEIS

 1: IMPORTANTE: NÃO PODEMOS UTILIZAR PALAVRAS RESERVADAS DA PRÓPRIA LINGUAGEM, PARA CRIAR VARIÁVEL

    ex: 
    let let = 'nome'
        isso irá gerar um erro pois LET é uma palavra reservada da própria linguagem

 2: VARIÁVEIS PRECISAM TER NOMES SIGNIFICATIVOS (COSTUME)
    ao criar variáveis, é de costume, criar variaveis que tenham algum sentido lógico.
    isso irá ajudar na rotina para o entendimento de um código.

    ex: let n = campoBaseDeDados; 
        let nomeCliente = 'João'; 
        a segunda variável faz muito mais sentido...

 3: NÃO PODEMOS COMEÇAR O NOME DE UMA VARIÁVEL COM UM NÚMERO.
    Ex: let 1nome;
    isso irá gerar um erro.

 4: O NOME DAS VARIÁVEIS NÃO PODEM CONTER ESPAÇOS OU TRAÇOS
    Ex: let nome-cliente;
        let nome cliente;
    
    para variáveis compostas podemos usar camelCase .... (convenção)
    ex: let nomeCliente;
        let nomeCompletoDoCliente;

 5: VARIÁVEIS EM JS SÃO Case-Sensitive 
    ex: let nomeCliente;
        let nomecliente;  
    tratam-se se 2 variáveis diferentes.
*/  

let nomeCliente = 'João';
let nomecliente = 'Maria';
console.log('Os clientes:', nomeCliente, 'e', nomecliente);

// 6: NÃO UTILIZE !!!!!!!!VAR!!!!!!!!, UTILIZE !!!!!!!LET!!!!!!!!! . #A010
