function openMenu() {
	document.querySelector('#menu').classList.add('menu-active');
	setTimeout(attachEventsMenu, 0);
}

function closeMenu() {
	document.querySelector('#menu').classList.remove('menu-active');
}

function attachEventsMenu() {
	document.body.addEventListener('click', closeMenuClickOut);
}

function closeMenuClickOut(event) {
	const isClickOutside = !event.target.closest('#menu');
	const isClickCross = !!event.target.closest('#close-menu');
	const isClickHamburger = !!event.target.closest('#hamburger');

	if (isClickOutside && !isClickCross && !isClickHamburger) {
		detachEventsMenu();
		closeMenu();
	}
}

function detachEventsMenu() {
	document.body.removeEventListener('click', closeMenuClickOut);
}
