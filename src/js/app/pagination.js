async function getCurrentPages(pages) {
	if (store.entities.render[pages]) {
		return startRenderPlaces(selectors.placesByPages(pages));
	}

	if (store.status === 'loading') {
		return console.log('Content loading is already going on');
	}

	renderLoading();
	const [start, end] = store.pagination[pages];
	const infoPlaces = await handleInfoPlaces(
		store.entities.places,
		start,
		end
	);
	store.entities.render[pages] = infoPlaces;
	store.entities.render.all = store.entities.render.all.concat(infoPlaces);
	startRenderPlaces(selectors.placesByPages(pages));
}
