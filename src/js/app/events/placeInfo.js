function backToPlaces(event) {
	event.target.removeEventListener('click', backToPlaces);
	updateRenderPlaces();
}
