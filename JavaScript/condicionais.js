//condicionais

var hora = 18;
var msg = "";
var msg2 = "";

if (hora < 12) {
	msg = "Bom dia!";
} else if (hora < 18) {
	msg = "Boa tarde!";
} else if (hora <= 23) {
	msg = "Boa noite!";
}

console.log(msg);

if (hora >= 12 && hora < 18) {
	msg2 = "Boa tarde!";	
}

console.log(msg2);

var num1 = prompt('Numero 1: ');
var num2 = prompt('Numero 2: ');
var op = prompt('operation: ');

num1 = parseFloat(num1); 
num2 = parseFloat(num2);

if (op == '+') {
	document.write(num1 + num2);
} else if (op == '-') {
	document.write(num1 - num2);
} else if (op == '*') {
	document.write(num1 * num2);
} else if (op == '/') {
	document.write(num1 / num2);
} else {
	console.error('Operation not found!');
}

// trabalhando com switch

var num3 = prompt('Numero 3: ');
var num4 = prompt('Numero 4: ');
var op2 = prompt('operation: ');

num3 = parseFloat(num3); 
num4 = parseFloat(num4);

switch (op2) {
	case '+':
		console.log(num3 + num4);
	break;
	case '-':
		console.log(num3 - num4);
	break;
	case '*':
		console.log(num3 * num4);
	break;
	case '/':
		console.log(num3 / num4);
	break;
	default :
		console.error('Erro');
}

