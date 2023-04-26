async function getPlacesByCity(city, page) {
	try {
		const api = new Api(store.lang);
		const geo = await api.getGeoCity(city);
		geo.category = document.querySelector('.sBtn-text').dataset.category;

		const places = await api.getPlacesByData(geo);
		saveDataRouteAfterRequest(geo, page);
		store.search = geo;

		return places;
	} catch (err) {
		return Promise.reject(err);
	}
}
