const store = {
	entities: {
		places: [],
		render: {
			1: [],
			all: [],
		},
	},
	root: document.querySelector('#root'),
	activePages: 1,
	pagination: {},
	status: 'idle',
	filters: [],
	sort: {
		name: false,
		rating: false,
	},
};

function resetToDefaultStore() {
	store.activePages = 1;
	store.entities.render = {
		1: [],
		all: [],
	};
	store.entities.places = [];
}

store.pagination = objPagination(8, 8);

function objPagination(step, qty) {
	const result = {};
	for (let i = 1; i <= qty; i++) {
		const start = i === 1 ? 0 : result[i - 1][1];
		const end = step * i;
		result[i] = [start, end];
	}
	return result;
}
