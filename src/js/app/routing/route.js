class Routes {
	currentState = null;
	currentURL = '';

	set state(state) {
		this.currentState = state;
		const search = this._makeURLParams(state);
		history.pushState(state, '', search);
		this.url = search;
	}

	get state() {
		return this.currentState;
	}

	set url(URL) {
		this.currentURL = location.origin + location.pathname + URL;
	}

	get url() {
		return this.currentURL;
	}

	replace(state, url) {
		this.currentState = state;
		if (url) {
			this.currentURL = url;
		}
	}

	_makeURLParams(state) {
		if (!state) {
			return `${location.origin + location.pathname}`;
		}
		const params = new URL(location.origin + location.pathname)
			.searchParams;
		Object.keys(state).forEach((key) => {
			const valueState = state[key];
			if (valueState) {
				params.append(key, valueState);
			}
		});
		return `?${params.toString()}`;
	}
}

const route = new Routes();
history.scrollRestoration = 'manual';
