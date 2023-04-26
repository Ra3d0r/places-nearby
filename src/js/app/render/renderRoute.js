function conditionalRenderRoute(state) {
	const page = state?.page;
	if (page === undefined) {
		return clearAllChields(store.root);
	}

	store.activePage = page;
	if (state.xid) {
		return startRenderPlaceInfo(state.xid);
	}
	updateRenderPlaces();
}

function conditionalRenderRouteAfterRequest() {
	if (!location.search) {
		return clearAllChields(store.root);
	}
	requestParams()
		.then(() => {
			if (route.state.xid) {
				return startRenderPlaceInfo(route.state.xid);
			}
			return updateRenderPlaces();
		})
		.catch(renderNotDefined);
	renderLoading();
	resetToDefaultStore();
}
