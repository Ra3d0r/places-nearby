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
};

const selectors = {
	places: () => store.entities.render.all,
	placeByXid: (xid) =>
		store.entities.render.all.find((place) => place.xid === xid),
	placesByPages: (pages) => {
		return store.entities.render[pages];
	},
};

(function initApp() {
	const optionMenu = document.querySelector('.select-categories');
	const options = optionMenu.querySelectorAll('.option');

	const inputSearch = document.querySelector('#search');
	const buttonSearch = inputSearch.previousElementSibling;

	const search = {
		inputSearch,
		buttonSearch,
	};

	const selectCategories = {
		optionMenu,
		options,
	};

	attachEventsApp(selectCategories, search);
})();

function attachEventsApp(selectCategories, search) {
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
}
