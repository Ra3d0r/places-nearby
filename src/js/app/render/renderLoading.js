function renderLoading() {
	clearAllChields(store.root);
	setInDom(store.root, createLoading());
	store.status = 'loading';
}
