function handleMode(event) {
	const darkMode = event.target.checked;
	setAttributeMode(darkMode);
	saveLocalStorage({ darkMode }, 'mode');
}

function setAttributeMode(darkMode) {
	if (darkMode) {
		document.body.setAttribute('data-theme', 'dark');
	} else {
		document.body.setAttribute('data-theme', 'light');
	}
}

function initModeActive(modEl) {
	const mode = getLocalStorage('mode') || {};
	const darkMode = mode?.darkMode;

	if (darkMode === undefined || darkMode === null) {
		setAttributeMode(false);
		modEl.checked = false;
	}
	setAttributeMode(darkMode);
	modEl.checked = darkMode;
}
