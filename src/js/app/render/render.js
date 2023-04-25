function initRender(value) {
	handleRequest(value)
		.then(() => {
			preparationRenderPlaces();
			conditionalRender(selectors.placesByPages(1));
		})
		.catch(() => {
			clearAllChields(store.root);
			setInDom(store.root, createNotDefined());
		});
	renderLoading();
	resetToDefaultStore();
}

function conditionalRender(places) {
	const allPlaces = store.entities.places || [];
	if (!allPlaces.length) {
		setInDom(store.root, createNotDefined());
	} else if (allPlaces.length > 8) {
		renderPlaces(places);
		setInDom(store.root, createPagination());
	} else {
		renderPlaces(places);
	}
}

function updateRenderPlaces() {
	if (store.entities.places.length > 8) {
		startRenderPlaces(selectors.placesByPages(store.activePages));
	} else {
		startRenderPlaces(selectors.placesByPages(store.activePages), false);
	}
}

function clearAllChields(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}
