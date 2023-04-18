function startRenderPlaces(places) {
	preparationRenderPlaces();
	renderPlaces(places);
	setInDom(store.root, createPagination());
}

function preparationRenderPlaces() {
	clearAllChields(store.root);
	document.querySelector('.search-section').classList.remove('hidden');
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
	store.status = 'idle';
}
