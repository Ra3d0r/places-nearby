function openMenu() {
	document.querySelector('#menu').classList.add('menu-active');
}

function closeMenu() {
	document.querySelector('#menu').classList.remove('menu-active');
}

function attachMenuLanguageEvents() {
	document.addEventListener('click', closeMenuSelectLanguage);
}
