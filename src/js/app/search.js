function handleSearchClick(value) {
	handleRequest(value);
}

function handleSearchKeyUp(event) {
	if (event.key === 'Enter') {
		const value = event.target.value;
		handleRequest(value);
	}
}
