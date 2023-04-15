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

function renderPlaces(places) {
	places.forEach((place) => {
		setInDom(store.root, createPlace(place));
	});
}

function renderPlace(place) {}

function clearAllChields(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}
