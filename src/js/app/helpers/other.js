function compareObjects(obj1, obj2) {
	if (obj1 === null || obj2 === null) {
		return false;
	}
	const obj1Props = Object.getOwnPropertyNames(obj1);
	const obj2Props = Object.getOwnPropertyNames(obj2);
	if (obj1Props.length != obj2Props.length) {
		return false;
	}

	for (let i = 0; i < obj1Props.length; i++) {
		const propName = obj1Props[i];
		if (obj1[propName] !== obj2[propName]) {
			return false;
		}
	}
	return true;
}

function geoDataStore() {
	if (!Object.keys(store.search).length) {
		return null;
	}
	const { lat, lon, category } = store.search;
	return { lat, lon, category };
}

function geoDataRouteState() {
	if (!route.state) {
		return null;
	}
	const { lat, lon, category } = route.state;
	return { lat, lon, category };
}

function geoAllData() {
	return [geoDataStore(), geoDataRouteState()];
}
