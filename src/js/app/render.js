function initRender(value) {
	handleRequest(value).then(() => {
		preparationRenderPlaces();
		const places = selectors.placesByPages(1);
		if (!places?.length) {
			setInDom(store.root, createNotDefined());
		} else if (places.length >= 8) {
			renderPlaces(places);
			setInDom(store.root, createPagination());
		} else {
			renderPlaces(places);
		}
	});
	renderLoading();
	resetToDefaultStore();
}

function renderLoading() {
	clearAllChields(store.root);
	setInDom(store.root, createLoading());
	store.status = 'loading';
}

function clearAllChields(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function resetToDefaultStore() {
	store.activePages = 1;
	store.entities.render = {
		1: [],
		all: [],
	};
}

function updateRenderPlaces() {
	if (store.entities.render.all >= 8) {
		startRenderPlaces(selectors.placesByPages(store.activePages));
	} else {
		startRenderPlaces(selectors.placesByPages(store.activePages), false);
	}
}
