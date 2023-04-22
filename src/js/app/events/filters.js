function handleInputFilers(event) {
	const input = event.target;
	if (input.checked) {
		store.filters = [...store.filters, input.value];
	} else {
		store.filters = store.filters.filter(
			(filter) => filter !== input.value
		);
	}
	updateRenderPlaces();
}
