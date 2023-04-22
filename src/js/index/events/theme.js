function handleTheme(event) {
	const darkMode = event.target.checked;
	setAttributeTheme(darkMode);
	saveLocalStorage({ darkMode }, 'theme');
}

function setAttributeTheme(darkMode) {
	if (darkMode) {
		document.body.setAttribute('data-theme', 'dark');
	} else {
		document.body.setAttribute('data-theme', 'light');
	}
}

function initModeTheme(modEl) {
	const mode = getLocalStorage('theme') || {};
	const darkMode = mode?.darkMode;

	if (darkMode === undefined || darkMode === null) {
		setAttributeTheme(false);
		modEl.checked = false;
		return;
	}
	setAttributeTheme(darkMode);
	modEl.checked = darkMode;
}

function handleInitTheme(mod, modMobile) {
	initModeTheme(mod);
	initModeTheme(modMobile);
}
