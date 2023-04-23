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

function checkMobileClickSelectLanguage(boxControl) {
	if (boxControl.classList.value.includes('header')) {
		return 'desktop';
	} else {
		return 'mobile';
	}
}

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
	menuLanguage.remove();
}
