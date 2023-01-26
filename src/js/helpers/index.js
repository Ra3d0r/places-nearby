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
	attachEvents({
		hamburger,
		cross,
	});
}

function attachEvents(objElements) {
	const { hamburger, cross } = objElements;

	hamburger.addEventListener('click', openMenu);
	cross.addEventListener('click', closeMenu);
}

function openMenu() {
	document.querySelector('#menu').classList.add('menu-active');
}

function closeMenu() {
	document.querySelector('#menu').classList.remove('menu-active');
}

init();
