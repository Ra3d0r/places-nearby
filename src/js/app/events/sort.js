function handleInputSorts(event) {
	const value = event.target.value;
	Object.keys(store.sort).forEach((sortKey) => {
		store.sort[sortKey] = false;
	});
	store.sort[value] = true;
	updateRenderPlaces();
}
