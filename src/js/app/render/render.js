function initRender(value, page) {
	handleRequest(value, page)
		.then(() => {
			preparationRenderPlaces();
			conditionalInitRender(selectors.placesByPage(page));
		})
		.catch(renderNotDefined);
	renderLoading();
	resetToDefaultStore();
}

function conditionalInitRender(places) {
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

function clearAllChields(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}
