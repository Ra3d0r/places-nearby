const selectors = {
	places: () => store.entities.render.all,
	placeByXid: (xid) =>
		store.entities.render.all.find((place) => place.xid === xid),
	placesByPage(page) {
		const places = store.entities.render[page] || [];
		return this._handlePlaces(places);
	},

	_handlePlaces(places) {
		const filterPlaces = this._filterPlaces(places);
		return this._sortPlaces(filterPlaces);
	},

	_filterPlaces(places) {
		return store.filters.length
			? places.filter((place) =>
					store.filters.every((filter) =>
						place.kinds.includes(filter)
					)
			  )
			: places;
	},

	_sortPlaces(places) {
		const { name, rating } = store.sort;
		if (!(name || rating)) {
			return places;
		}
		return name
			? places.sort((a, b) => a.name.localeCompare(b.name))
			: places.sort((a, b) => (a.rate > b.rate ? -1 : 1));
	},
};
