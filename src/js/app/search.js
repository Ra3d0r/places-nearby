function handleSearchClick(input) {
	initRender(input.value);
	input.value = '';
}

function handleSearchKeyUp(event) {
	if (event.key === 'Enter') {
		const value = event.target.value;
		initRender(value);
		event.target.value = '';
	}
}
