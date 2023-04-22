function startRenderPlaces(places, pagination = true) {
	preparationRenderPlaces();
	renderPlaces(places);
	if (pagination) {
		setInDom(store.root, createPagination());
	}
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
		const placeElement = createPlace(place);
		if (placeElement) {
			container.append(placeElement);
		}
	});

	setInDom(store.root, container);
	store.status = 'idle';
}
