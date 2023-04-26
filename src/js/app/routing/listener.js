window.onpopstate = function (event) {
	route.replace(event.state);
	const [geoStore, geoRoute] = geoAllData();
	const isEqual = compareObjects(geoStore, geoRoute);
	if (isEqual) {
		// Рендер со стора, когда параметры (гео) равны
		conditionalRenderRoute(route.state);
	} else {
		conditionalRenderRouteAfterRequest();
	}
};
