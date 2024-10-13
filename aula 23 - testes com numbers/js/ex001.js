const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `
<p>A raiz quadrada é: ${numero ** 0.5}</p>
<p>${numero} é um nº inteiro: ${Number.isInteger(numero)}</p>
<p>É NaN: ${Number.isNaN(numero)}</p>
<p>Arredondando para baixo: ${Math.floor(numero)}</p>
<p>Arredondando para acima: ${Math.ceil(numero)}</p>
<p>Com 2 casas decimais: ${Number.parseFloat(numero).toFixed(2)}</p>
<p>Com 3 casas decimais: ${Number.parseFloat(numero).toFixed(3)}</p>
`;