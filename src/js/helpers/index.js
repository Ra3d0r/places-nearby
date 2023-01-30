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
		document.body.classList.add('webp');
	} else {
		document.body.classList.add('no-webp');
	}
})();

(function init() {
	const hamburger = document.querySelector('#hamburger');
	const cross = document.querySelector('#close-menu');
	const selectLanguage = document.querySelector('#select-languages');
	const selectLanguageMobile = document.querySelector(
		'#select-languages-mobile'
	);
	const mod = document.querySelector('#mod');
	attachEvents({
		hamburger,
		cross,
		selectLanguage,
		selectLanguageMobile,
		mod,
	});
	initModeActive(mod);
})();

function attachEvents(objElements) {
	const { hamburger, cross, selectLanguage, selectLanguageMobile, mod } =
		objElements;

	hamburger.addEventListener('click', openMenu);
	cross.addEventListener('click', closeMenu);

	selectLanguage.addEventListener('click', openSelectLanguage);
	selectLanguageMobile.addEventListener('click', openSelectLanguage);

	mod.addEventListener('click', handleMode);
}

function openMenu() {
	document.querySelector('#menu').classList.add('menu-active');
}

function closeMenu() {
	document.querySelector('#menu').classList.remove('menu-active');
}

function openSelectLanguage(event) {
	const boxControl = event.target.parentElement.parentElement;
	const mobileOrDesktop = checkMobileClickSelectLanguage(boxControl);
	const menuLanguage = document.querySelector('.menu-language');
	if (!boxControl.contains(menuLanguage)) {
		const menuSelectLanguage = createMenuSelectLanguage(mobileOrDesktop);
		attachMenuLanguageEvents();
		setInDom(boxControl, menuSelectLanguage);
	}
}

function checkMobileClickSelectLanguage(boxControl) {
	if (boxControl.classList.value.includes('header')) {
		return 'desktop';
	} else {
		return 'mobile';
	}
}

function createMenuSelectLanguage(mobileOrDesktop) {
	const div = document.createElement('div');
	div.innerHTML = `<div class="menu-language__arrow"></div> 
        <ul class="menu-language__list">
            <li class="menu-language__item"><a class="menu-language__link" id="Russian">Russian</a></li>
            <li class="menu-language__item"><a class="menu-language__link" id="English">English</a></li>
        </ul>`;
	div.classList.add(`menu-language`, mobileOrDesktop);
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

function handleMode(event) {
	const darkMode = event.target.checked;
	setAttributeMode(darkMode);
	saveLocalStorage({ darkMode }, 'mode');
}

function saveLocalStorage(obj, key) {
	localStorage.setItem(key, JSON.stringify(obj));
}

function getLocalStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

function initModeActive(mod) {
	const { darkMode } = getLocalStorage('mode');
	if (darkMode === undefined || darkMode === null) {
		return;
	}
	setAttributeMode(darkMode);
	mod.checked = darkMode;
}

function setAttributeMode(darkMode) {
	if (darkMode) {
		document.body.setAttribute('data-theme', 'dark');
	} else {
		document.body.setAttribute('data-theme', 'light');
	}
}

function setInDom(parentElement, element) {
	parentElement.append(element);
}
