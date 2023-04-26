function backToPlaces() {
	updateRenderPlaces();
	route.state = { ...route.state, xid: null };
}
