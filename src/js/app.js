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
	pagination: {
		1: [0, 8], // Начало массива мест, конец массива
		2: [8, 16],
		3: [16, 24],
		4: [24, 32],
		5: [32, 40],
		6: [40, 48],
		7: [48, 56],
		8: [56, 64],
	},
	status: 'idle',
	filters: [],
	sort: {
		name: false,
		rating: false,
	},
};

const selectors = {
	places: () => store.entities.render.all,
	placeByXid: (xid) =>
		store.entities.render.all.find((place) => place.xid === xid),
	placesByPages(pages) {
		const places = store.entities.render[pages] || [];
		return this.handlePlaces(places);
	},

	handlePlaces: (places) => {
		const filterPlaces = store.filters.length
			? places.filter((place) =>
					store.filters.every((filter) =>
						place.kinds.includes(filter)
					)
			  )
			: places;
		const { name, rating } = store.sort;
		if (!(name || rating)) {
			return filterPlaces;
		}
		return name
			? filterPlaces.sort((a, b) => a.name.localeCompare(b.name))
			: filterPlaces.sort((a, b) => (a.rate > b.rate ? -1 : 1));
	},
};

(function initApp() {
	const optionMenu = document.querySelector('.select-categories');
	const options = optionMenu.querySelectorAll('.option');

	const inputSearch = document.querySelector('#search');
	const buttonSearch = inputSearch.previousElementSibling;

	const inputFilters = document.querySelectorAll('#filter > input');
	const inputSorts = document.querySelectorAll('#sort input');
	const controlPanel = {
		inputFilters,
		inputSorts,
	};

	const search = {
		inputSearch,
		buttonSearch,
	};

	const selectCategories = {
		optionMenu,
		options,
	};

	attachEventsApp(selectCategories, search, controlPanel);
})();

function attachEventsApp(selectCategories, search, controlPanel) {
	const { optionMenu, options } = selectCategories;

	optionMenu.addEventListener('click', toggleSelectCategories);

	options.forEach((option) => {
		option.addEventListener('click', handleSelectCategories);
	});

	const { inputSearch, buttonSearch } = search;

	buttonSearch.addEventListener('click', () => {
		handleSearchClick(inputSearch);
	});
	inputSearch.addEventListener('keyup', handleSearchKeyUp);

	const { inputFilters, inputSorts } = controlPanel;

	inputFilters.forEach((input) => {
		input.addEventListener('click', handleInputFilers);
	});
	inputSorts.forEach((input) => {
		input.addEventListener('click', handleInputSorts);
	});
}
