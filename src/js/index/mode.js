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

function initModeActive(mod) {
	const { darkMode } = getLocalStorage('mode');
	if (darkMode === undefined || darkMode === null) {
		return;
	}
	setAttributeMode(darkMode);
	mod.checked = darkMode;
}
