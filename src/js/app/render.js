function initRender(value) {
	handleRequest(value).then(() => {
		preparationRenderPlaces();
		renderPlaces(selectors.places());
		setInDom(store.root, createPagination());
	});
	renderLoading();
}

function startRenderPlaces() {
	preparationRenderPlaces();
	renderPlaces(selectors.places());
	setInDom(store.root, createPagination());
}

function startRenderPlaceInfo(xid) {
	preparationRenderPlaceInfo();
	const place = selectors.placeByXid(xid);
	renderPlaceInfo(place.info);
	createMap(place);
}

function preparationRenderPlaces() {
	clearAllChields(store.root);
	document.querySelector('.search-section').classList.remove('hidden');
}

function preparationRenderPlaceInfo() {
	clearAllChields(store.root);
	document.querySelector('.search-section').classList.add('hidden');
}

function renderLoading() {
	clearAllChields(store.root);
	setInDom(store.root, createLoading());
}

function renderPlaces(places) {
	if (!Array.isArray(places)) {
		throw new Error('В функцию рендера нескольких мест передан не массив');
	}
	const container = document.createElement('div');
	container.classList.add('section-places__grid-container');

	places.forEach((place) => {
		container.append(createPlace(place));
	});

	setInDom(store.root, container);
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
