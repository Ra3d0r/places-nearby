async function handleRequest(city) {
	const api = new Api();
	const geo = await api.getGeoCity(city);

	const category = document.querySelector('.sBtn-text').dataset.category;
	geo.category = category;

	const places = await api.getPlacesByData(geo);
	if (!places.length) {
		return console.log('Places is not defined');
	}
	store.entities.places = places;

	const [start, end] = store.pagination[1];
	const infoPlaces = await handleInfoPlaces(places, start, end);

	store.entities.render[1] = infoPlaces;
	store.entities.render.all = [...infoPlaces];
}

async function handleInfoPlaces(places = [], start, qty) {
	qty = places.length < 8 ? places.length : qty;

	const newPlaces = [];
	const generator = generatorInfoPlaces(places.slice(start, qty));
	let infoPlace = null;

	while (!(infoPlace = await generator.next()).done) {
		newPlaces.push(infoPlace.value);
	}

	return newPlaces;
}

async function* generatorInfoPlaces(places) {
	const api = new Api();
	for (let place of places) {
		await new Promise((resolve) => setTimeout(resolve, 100));
		const infoPlace = await api.getPlaceByXid(place.xid);
		yield {
			...place,
			info: infoPlace,
		};
	}
}
