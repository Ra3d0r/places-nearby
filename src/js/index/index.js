(function init() {
	const hamburger = document.querySelector('#hamburger');
	const cross = document.querySelector('#close-menu');
	const selectLanguage = document.querySelector('#select-languages');
	const selectLanguageMobile = document.querySelector(
		'#select-languages-mobile'
	);
	const mod = document.querySelector('#mod');
	const modMobile = document.querySelector('#mode-mobile');
	attachEvents({
		hamburger,
		cross,
		selectLanguage,
		selectLanguageMobile,
		mod,
		modMobile,
	});
	initModeActive(mod);
	initModeActive(modMobile);
})();

function attachEvents(objElements) {
	const {
		hamburger,
		cross,
		selectLanguage,
		selectLanguageMobile,
		mod,
		modMobile,
	} = objElements;

	hamburger.addEventListener('click', openMenu);
	cross.addEventListener('click', closeMenu);

	selectLanguage.addEventListener('click', openSelectLanguage);
	selectLanguageMobile.addEventListener('click', openSelectLanguage);

	mod.addEventListener('click', handleMode);
	modMobile.addEventListener('click', handleMode);
}

function saveLocalStorage(obj, key) {
	localStorage.setItem(key, JSON.stringify(obj));
}

function getLocalStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

function setInDom(parentElement, element) {
	parentElement.append(element);
}
