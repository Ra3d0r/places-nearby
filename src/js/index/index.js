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
	handleInitTheme(mod, modMobile);
	initWebp();
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

	mod.addEventListener('click', handleTheme);
	modMobile.addEventListener('click', handleTheme);
}

function saveLocalStorage(obj, key) {
	try {
		localStorage.setItem(key, JSON.stringify(obj));
		return 'OK';
	} catch (err) {
		console.log(err);
		return null;
	}
}

function getLocalStorage(key) {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (err) {
		console.log(err);
		return null;
	}
}

function setInDom(parentElement, element) {
	if (parentElement === null) {
		throw new Error('Родительский элемент не определен');
	}

	if (element === null || element === undefined) {
		return console.log('Передан пустой элемент в setInDom');
	}
	parentElement.append(element);
}
