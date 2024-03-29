function getParams() {
	const params = new URL(location.href).searchParams;
	const result = {
		lat: Number(params.get('lat')),
		lon: Number(params.get('lon')),
		category: params.get('category'),
		page: Number(params.get('page')),
		xid: params.get('xid'),
	};

	return result;
}
