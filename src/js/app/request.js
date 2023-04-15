async function handleRequest(city) {
	const geo = await getGeo(city);
	const category = document.querySelector('.sBtn-text').dataset.category;
	geo.category = category;

	const places = await getPlaces(geo);
	const infoPlaces = await handleInfoPlaces(places, 8);
	store.entities = [...infoPlaces];
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

async function handleInfoPlaces(places, qty) {
	const newPlaces = [];

	for (let i = 0; i < qty; i++) {
		const infoPlace = await getInfoPlace(places[i].xid);
		const newPlace = {
			...places[i],
			info: infoPlace,
		};
		newPlaces.push(newPlace);
	}

	return newPlaces;
}

async function getInfoPlace(xid) {
	const api = new Api();
	const data = await api.getPlaceByXid(xid);
	return data;
}
