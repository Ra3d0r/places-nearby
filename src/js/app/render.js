function initRender(value) {
	handleRequest(value).then(() => {
		clearAllChields(store.root);
		store.root.classList.remove('block');
		renderPlaces(selectors.places());
	});
	clearAllChields(store.root);
	store.root.classList.add('block');
	setInDom(store.root, createLoading());
}

function startRenderPlaces() {
	clearAllChields(store.root);
	store.root.classList.remove('block');
	document.querySelector('.search-section').classList.remove('hidden');
	renderPlaces(selectors.places());
}

function startRenderPlaceInfo(xid) {
	clearAllChields(store.root);
	document.querySelector('.search-section').classList.add('hidden');
	store.root.classList.add('block');
	renderPlaceInfo(selectors.placeByXid(xid));
}

function renderPlaces(places) {
	if (!Array.isArray(places)) {
		throw new Error('В функцию рендера нескольких мест передан не массив');
	}

	places.forEach((place) => {
		setInDom(store.root, createPlace(place));
	});
}

function renderPlaceInfo(place) {
	const placeInfo = createPlaceInfo(place);
	setInDom(store.root, placeInfo);
}

function clearAllChields(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}
