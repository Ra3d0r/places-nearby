function backToPlaces() {
	updateRenderPlaces();
	scrollIntoPlaceByXid(route.state.xid);
	route.state = { ...route.state, xid: null };
}

function scrollIntoPlaceByXid(xid) {
	if (typeof xid !== 'string') {
		return;
	}
	const place = document
		.querySelector(`[data-xid="${xid}"]`)
		.closest('.place');
	place?.scrollIntoView();
}
