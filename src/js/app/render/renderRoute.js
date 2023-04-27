function conditionalRenderRoute(state, previousXid) {
	const page = state?.page;
	if (page === undefined) {
		return clearAllChields(store.root);
	}

	store.activePage = page;
	if (state.xid) {
		return startRenderPlaceInfo(state.xid);
	}
	updateRenderPlaces();
	scrollIntoPlaceByXid(previousXid);
}

function conditionalRenderRouteAfterRequest(previousXid) {
	if (!location.search) {
		return clearAllChields(store.root);
	}
	renderLoading();
	resetToDefaultStore();
	requestParams()
		.then(() => {
			if (route.state.xid) {
				return startRenderPlaceInfo(route.state.xid);
			}
			updateRenderPlaces();
			scrollIntoPlaceByXid(previousXid);
		})
		.catch(renderNotDefined);
}
