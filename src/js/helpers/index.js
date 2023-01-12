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
