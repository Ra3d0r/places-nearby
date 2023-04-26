function resetToDefaultStore() {
	store.activePage = 1;
	store.entities.render = {
		1: [],
		all: [],
	};
	store.entities.places = [];
	store.search = {};
}

function objPagination(step, qty) {
	const result = {};
	for (let i = 1; i <= qty; i++) {
		const start = i === 1 ? 0 : result[i - 1][1];
		const end = step * i;
		result[i] = [start, end];
	}
	return result;
}

function saveDataStoreAfterRequest(places, infoPlaces, page) {
	store.entities.places = places;
	store.entities.render[page] = infoPlaces;
	store.entities.render.all = [...infoPlaces];
}
