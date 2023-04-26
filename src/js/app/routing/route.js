class Routes {
	currentState = null;

	set state(state) {
		this.currentState = state;
		history.pushState(state, '', this._makeURLParams(state));
	}

	get state() {
		return this.currentState;
	}

	replace(state) {
		this.currentState = state;
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
