async function requestParams() {
	try {
		const api = new Api(store.lang);
		const params = getParams();
		const option = validParams(params);
		const places = await api.getPlacesByData(option);
		const [start, end] = store.pagination[option.page];
		const infoPlaces = await handleInfoPlaces(places, start, end);
		saveDataStoreAfterRequest(places, infoPlaces, option.page);
		store.search = params;
		route.replace(params);
	} catch (err) {
		console.log(err);
	}
}
