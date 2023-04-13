function renderPlaces() {
	const places = store.entities;
}

function renderPlace(xid) {
	const place = store.entities.find((place) => place.xid === xid);
}
