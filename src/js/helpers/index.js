async function WebpIsSupported() {
	if (!self.createImageBitmap) return false;
	const webpData =
		'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';
	const blob = await fetch(webpData).then((r) => r.blob());
	return createImageBitmap(blob).then(
		() => true,
		() => false
	);
}

(async () => {
	if (await WebpIsSupported()) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
})();

function init() {
	const hamburger = document.querySelector('#hamburger');
	const cross = document.querySelector('#close-menu');
	const selectLanguage = document.querySelector('#select-languages');
	attachEvents({
		hamburger,
		cross,
		selectLanguage,
	});
}

function attachEvents(objElements) {
	const { hamburger, cross, selectLanguage } = objElements;

	hamburger.addEventListener('click', openMenu);
	cross.addEventListener('click', closeMenu);

	selectLanguage.addEventListener('click', handleSelectLanguage);
}

function openMenu() {
	document.querySelector('#menu').classList.add('menu-active');
}

function closeMenu() {
	document.querySelector('#menu').classList.remove('menu-active');
}

function handleSelectLanguage(event) {
	const menuSelectLanguage = createMenuSelectLanguage();
	setInDom(event.target.parentElement, menuSelectLanguage);
}

function createMenuSelectLanguage() {
	const div = document.createElement('div');
	div.innerHTML = `<div class="menu-language__arrow"></div> 
        <ul class="menu-language__list">
            <li class="menu-language__item"><a class="menu-language__link" id="Russian">Russian</a></li>
            <li class="menu-language__item"><a class="menu-language__link" id="English">English</a></li>
        </ul>`;
	div.classList.add('menu-language');
	return div;
}

function attachLanguageEvents(menuSelectLanguage) {
	const languages = menuSelectLanguage.querySelectorAll(
		'.menu-language__link'
	);
	languages.forEach((language) => {
		//language.addEventListener
	});
}

function setInDom(parentElement, element) {
	parentElement.append(element);
}

init();
