function handleSearchClick(input) {
	if (store.status === 'loading') {
		return console.log('Content loading is already going on');
	}
	if (!input.value) {
		return;
	}
	initRender(input.value, 1);
	input.value = '';
}

function handleSearchKeyUp(event) {
	if (!event.target.value) {
		return;
	}
	if (event.key === 'Enter') {
		if (store.status === 'loading') {
			return console.log('Content loading is already going on');
		}
		const value = event.target.value;
		initRender(value, 1);
		event.target.value = '';
	}
}
