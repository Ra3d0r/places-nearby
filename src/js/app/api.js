class Api {
	#api = '5ae2e3f221c38a28845f05b695f92c0afb884b763036c7ed3be0b040';
	URL = 'http://api.opentripmap.com/0.1/';

	async getGeoCity(city) {
		const endPoint =
			this.URL +
			`ru/places/geoname?name=${city}&format=geojson&apikey=${this.#api}`;

		return client.get(endPoint);
	}

	async getPlacesByData({ lat, lon, category }) {
		const endPoint =
			this.URL +
			`ru/places/bbox?lon_min=${lon}&lat_min=${lat}5&lon_max=${
				lon + 1
			}&lat_max=${lat + 1}&kinds=${category}&format=json&apikey=${
				this.#api
			}`;

		return client.get(endPoint);
	}

	async getPlaceByXid(xid) {
		try {
			const endPoint =
				this.URL + `ru/places/xid/${xid}?apikey=${this.#api}`;

			const res = await fetch(endPoint);

			if (!res.ok) {
				return null;
			}
			return await res.json();
		} catch (err) {
			console.error(err);
		}
	}
}
