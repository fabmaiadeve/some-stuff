function subirTela() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
}

function decidirBotaoScroll() {
	if(window.scrollY === 0) {
		// ocultar o botão
		document.querySelector('.scrollbutton').style.display = 'none';
	} else {
		// mostrar o botao
		document.querySelector('.scrollbutton').style.display = 'block';
	}
}

/* Forma mais basica de resolver
setInterval(decidirBotaoScroll, 1000);
*/

window.addEventListener('scroll', decidirBotaoScroll);