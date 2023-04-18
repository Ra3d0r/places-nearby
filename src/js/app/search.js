function handleSearchClick(input) {
	if (store.status === 'loading') {
		return console.log('Content loading is already going on');
	}
	initRender(input.value);
	input.value = '';
}

function handleSearchKeyUp(event) {
	if (store.status === 'loading') {
		return console.log('Content loading is already going on');
	}
	if (event.key === 'Enter') {
		const value = event.target.value;
		initRender(value);
		event.target.value = '';
	}
}
