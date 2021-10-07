function menuToggle() {
	let menuArea = document.getElementById("menu-area");
	
	// Primeira forma de resposta
	/*
	if (menuArea.classList.contains('menu-opened') == true) {
		menuArea.classList.remove('menu-opened');
	} else {
		menuArea.classList.add('menu-opened');
	}
	*/
	// Segunda forma de resposta
	if (menuArea.style.width == '200px') {
		menuArea.style.width = '0px';
	} else {
		menuArea.style.width = '200px';
	}
}