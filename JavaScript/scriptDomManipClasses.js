function verde() {
	document.querySelector("#exemplo").classList.remove('vermelho');
	document.querySelector("#exemplo").classList.remove('azul');
	document.querySelector("#exemplo").classList.add('verde');	
}

function vermelho () {
	document.querySelector("#exemplo").classList.remove('verde');
	document.querySelector("#exemplo").classList.remove('azul');
	document.querySelector("#exemplo").classList.add('vermelho');
}

function azul () {
	document.querySelector("#exemplo").classList.remove('vermelho');
	document.querySelector("#exemplo").classList.remove('verde');
	document.querySelector("#exemplo").classList.add('azul');
}

function trocar () {
	if(document.querySelector("#exemplo").classList.contains('preto')) {
		document.querySelector("#exemplo").classList.remove('preto');
		document.querySelector("#exemplo").classList.add('verde');
	} else {
		document.querySelector("#exemplo").classList.remove('verde');
		document.querySelector("#exemplo").classList.add('preto');	
	}
}

function alterar() {
	document.getElementById('titulo').innerHTML = 'Trocou o título!';
	document.getElementById('exemplo').innerHTML = 'Trocou o nome!';
}

//alterar();

function somar(x, y) {
	let total = x + y;
	document.getElementById('campo').value = total;
} 

somar(5, 10);

function segundaSoma(x, y) {
	let total = x + y;
	return total;
} 

var resultado = segundaSoma(2, 2);

console.log(resultado);