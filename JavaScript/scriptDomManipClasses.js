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