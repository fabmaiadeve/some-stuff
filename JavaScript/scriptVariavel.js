var nome = "Fabiano";

var idade = 43;
var idade2 = "43";

var soma = idade + idade2;

//alert(nome);

var name = 'Fabiano';

var lastname = 'Maia';

var nomeCompleto = name.concat(' ').concat(lastname);

nomeCompleto = name + ' ' + lastname.replace('a', '@');

name = name.toLowerCase();

name = name.toUpperCase();

var num = 10.20;

var num2 = 5;

num = parseInt(num);

num2 = parseFloat(num2).toFixed(2);

var numRandom = Math.round(Math.random() * 100);


document.write(numRandom);