async function getCurrentPage(page) {
	route.state = { ...route.state, page };
	if (store.entities.render[page]) {
		return startRenderPlaces(selectors.placesByPage(page));
	}

	if (store.status === 'loading') {
		return console.log('Content loading is already going on');
	}

	renderLoading();
	const [start, end] = store.pagination[page];
	const infoPlaces = await handleInfoPlaces(
		store.entities.places,
		start,
		end
	);
	store.entities.render[page] = infoPlaces;
	store.entities.render.all = store.entities.render.all.concat(infoPlaces);
	startRenderPlaces(selectors.placesByPage(page));
}
