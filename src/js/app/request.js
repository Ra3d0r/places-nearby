async function handleRequest(city) {
	const geo = await getGeo(city);
	const category = document.querySelector('.sBtn-text').dataset.category;
	geo.category = category;

	const places = await getPlaces(geo);
	store.entities.places = places;
	const infoPlaces = await handleInfoPlaces(places, 8);
	store.entities.render = infoPlaces;
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
		const place = places.shift();
		const infoPlace = await getInfoPlace(place.xid);
		if (!infoPlace) {
			i--;
			continue;
		}
		newPlaces.push({
			...place,
			info: infoPlace,
		});
	}

	return newPlaces;
}

async function getInfoPlace(xid) {
	const api = new Api();
	const data = await api.getPlaceByXid(xid);
	return data;
}
