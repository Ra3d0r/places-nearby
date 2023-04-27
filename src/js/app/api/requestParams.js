async function requestParams() {
	try {
		const api = new Api(store.lang);
		const params = getParams();
		const page = params?.page || 1;
		const places = await api.getPlacesByData(params);
		const [start, end] = store.pagination[page];
		const infoPlaces = await handleInfoPlaces(places, start, end);
		saveDataStoreAfterRequest(places, infoPlaces, page);
		store.activePage = page;
		store.search = params;
		route.replace(params);
	} catch (err) {
		console.log(err);
	}
}
