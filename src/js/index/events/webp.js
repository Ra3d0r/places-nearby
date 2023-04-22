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

function setClassWebp(isSupported) {
	if (isSupported) {
		document.body.classList.add('webp');
	} else {
		document.body.classList.add('no-webp');
	}
}

async function initWebp() {
	const webp = getLocalStorage('webp');

	if (webp === null || webp === undefined) {
		const isSupported = await WebpIsSupported();
		setClassWebp(isSupported);
		saveLocalStorage(isSupported, 'webp');
		return;
	}

	setClassWebp(webp);
}
