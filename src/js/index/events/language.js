function openSelectLanguage(event) {
	const boxControl = event.target.closest('.box-control');

	const mobileOrDesktop = checkMobileClickSelectLanguage(boxControl);
	const menuLanguage = document.querySelector('.menu-language');

	if (!boxControl.contains(menuLanguage)) {
		const menuSelectLanguage = createMenuSelectLanguage(mobileOrDesktop);
		document.body.addEventListener('click', closeMenuSelectLanguage);
		setInDom(boxControl, menuSelectLanguage);
	}
}

function closeMenuSelectLanguage(event) {
	const clickOutMenu = !event.target.classList.value.includes('language');
	if (clickOutMenu) {
		deleteMenuSelectLanguage();
	}
}

function deleteMenuSelectLanguage() {
	const menuLanguage = document.querySelector('.menu-language');
	document.body.removeEventListener('click', closeMenuSelectLanguage);
	menuLanguage
		.querySelectorAll('a')
		.forEach((a) => a.removeEventListener('click', handleSelectLanguages));
	menuLanguage.remove();
}

function checkMobileClickSelectLanguage(boxControl) {
	return boxControl.classList.value.includes('header') ? 'desktop' : 'mobile';
}
