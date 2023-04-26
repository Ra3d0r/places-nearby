async function handleRequest(city, page) {
	const places = await getPlacesByCity(city, page);
	if (!places.length) {
		return console.log('Places is not defined');
	}

	const [start, end] = store.pagination[page];
	const infoPlaces = await handleInfoPlaces(places, start, end);

	saveDataStoreAfterRequest(places, infoPlaces, page);
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
	const api = new Api(store.lang);
	for (let place of places) {
		await new Promise((resolve) => setTimeout(resolve, 100));
		const infoPlace = await api.getPlaceByXid(place.xid);
		yield {
			...place,
			info: infoPlace,
		};
	}
}
