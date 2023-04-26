function handlePlaceButton(event) {
	const xid = event.target.dataset.xid;
	startRenderPlaceInfo(xid);
	route.state = { ...route.state, xid };
}
