async function handleRequest(city) {
	const geo = await getGeo(city);
	const category = document.querySelector('.sBtn-text').dataset.category;
	geo.category = category;

	const places = await getPlaces(geo);
	if (!places.length) {
		return console.log('Places is not defined');
	}
	store.entities.places = places;

	const [start, end] = store.pagination[1];
	const infoPlaces = await handleInfoPlaces(places, start, end);

	store.entities.render[1] = infoPlaces;
	store.entities.render.all = [].concat(infoPlaces);
}

async function getGeo(city) {
	const api = new Api();
	const { lat, lon } = await api.getGeoCity(city);
	return { lat, lon };
}

async function getPlaces(geo) {
	const api = new Api();
	const data = await api.getPlacesByData(geo);
	return data;
}

async function handleInfoPlaces(places = [], start, qty) {
	if (!places.length) {
		return console.log('Request with an empty array');
	}
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
	for (let place of places) {
		await new Promise((resolve) => setTimeout(resolve, 100));
		const infoPlace = await getInfoPlace(place.xid);
		yield {
			...place,
			info: infoPlace,
		};
	}
}

async function getInfoPlace(xid) {
	const api = new Api();
	const data = await api.getPlaceByXid(xid);
	return data;
}
