function renderNotDefined() {
	clearAllChields(store.root);
	setInDom(store.root, createNotDefined());
	if (route.state) {
		route.state = null;
	}
	store.status = 'idle';
}
