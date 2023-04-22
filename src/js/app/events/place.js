function handlePlaceButton(event) {
	detachEventPlaces();
	startRenderPlaceInfo(event.target.dataset.xid);
}

function detachEventPlaces() {
	store.root.querySelectorAll('.place__button').forEach((button) => {
		button.removeEventListener('click', handlePlaceButton);
	});
}
