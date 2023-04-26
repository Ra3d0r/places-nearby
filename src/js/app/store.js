const store = {
	entities: {
		places: [],
		render: {
			1: [],
			all: [],
		},
	},
	root: document.querySelector('#root'),
	activePage: 1,
	pagination: {},
	status: 'idle',
	filters: [],
	sort: {
		name: false,
		rating: false,
	},
	lang: document.querySelector('#language').dataset.lang,
	search: {},
};

store.pagination = objPagination(8, 8);
