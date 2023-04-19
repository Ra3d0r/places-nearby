function initRender(value) {
	handleRequest(value).then(() => {
		preparationRenderPlaces();
		renderPlaces(selectors.placesByPages(1));
		setInDom(store.root, createPagination());
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
	startRenderPlaces(selectors.placesByPages(store.activePages));
}
