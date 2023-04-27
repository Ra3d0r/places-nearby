window.addEventListener('popstate', (event) => {
	if (handleHash()) {
		return;
	}
	const previousXid = route.state?.xid;
	route.replace(event.state, location.href);
	const [geoStore, geoRoute] = geoAllData();
	const isEqual = compareObjects(geoStore, geoRoute);
	if (isEqual) {
		// Рендер со стора, когда параметры (гео) равны
		conditionalRenderRoute(route.state, previousXid);
	} else {
		conditionalRenderRouteAfterRequest(previousXid);
	}
});

function isHashHome(string) {
	return string === '#home';
}

function getChangeString(str1, str2) {
	return str1
		.split('')
		.filter((char, index) => {
			return char !== str2.charAt(index);
		})
		.join('');
}

function handleHash() {
	const string = getChangeString(location.href, route.url);
	return isHashHome(string);
}
