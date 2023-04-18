function startRenderPlaceInfo(xid) {
	preparationRenderPlaceInfo();
	const place = selectors.placeByXid(xid);
	renderPlaceInfo(place.info);
	createMap(place);
}

function preparationRenderPlaceInfo() {
	clearAllChields(store.root);
	document.querySelector('.search-section').classList.add('hidden');
}

function renderPlaceInfo(place) {
	const placeInfo = createPlaceInfo(place);
	setInDom(store.root, placeInfo);
}
