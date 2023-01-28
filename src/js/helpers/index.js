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

(function init() {
	const hamburger = document.querySelector('#hamburger');
	const cross = document.querySelector('#close-menu');
	const selectLanguage = document.querySelector('#select-languages');
	const selectLanguageMobile = document.querySelector(
		'#select-languages-mobile'
	);
	attachEvents({
		hamburger,
		cross,
		selectLanguage,
		selectLanguageMobile,
	});
})();

function attachEvents(objElements) {
	const { hamburger, cross, selectLanguage, selectLanguageMobile } =
		objElements;

	hamburger.addEventListener('click', openMenu);
	cross.addEventListener('click', closeMenu);

	selectLanguage.addEventListener('click', openSelectLanguage);
	selectLanguageMobile.addEventListener('click', openSelectLanguage);
}

function openMenu() {
	document.querySelector('#menu').classList.add('menu-active');
}

function closeMenu() {
	document.querySelector('#menu').classList.remove('menu-active');
}

function openSelectLanguage(event) {
	const boxControl = event.target.parentElement.parentElement;
	const menuOrHeader = checkClickSelectLanguage(boxControl);
	if (!boxControl.lastChild.classList?.value.includes('menu-language')) {
		const menuSelectLanguage = createMenuSelectLanguage(menuOrHeader);
		attachMenuLanguageEvents();
		setInDom(boxControl, menuSelectLanguage);
	}
}

function checkClickSelectLanguage(boxControl) {
	console.log(boxControl.classList.value);
	if (boxControl.classList.value.includes('header')) {
		return 'desktop';
	} else {
		return 'mobile';
	}
}

function createMenuSelectLanguage(menuOrHeader) {
	const div = document.createElement('div');
	div.innerHTML = `<div class="menu-language__arrow"></div> 
        <ul class="menu-language__list">
            <li class="menu-language__item"><a class="menu-language__link" id="Russian">Russian</a></li>
            <li class="menu-language__item"><a class="menu-language__link" id="English">English</a></li>
        </ul>`;
	div.classList.add(`menu-language`, menuOrHeader);
	return div;
}

function attachMenuLanguageEvents() {
	document.addEventListener('click', closeMenuSelectLanguage);
}

function closeMenuSelectLanguage(event) {
	const clickOutMenu =
		event.target.classList.value !== 'menu-language__list' &&
		event.target.classList.value !== 'select-languages__languages';
	if (clickOutMenu) {
		deleteMenuSelectLanguage();
	}
}

function deleteMenuSelectLanguage() {
	const menuLanguage = document.querySelector('.menu-language');
	detachMenuLanguageEvents();
	menuLanguage.remove();
}

function detachMenuLanguageEvents() {
	document.removeEventListener('click', closeMenuSelectLanguage);
}

function setInDom(parentElement, element) {
	parentElement.append(element);
}
