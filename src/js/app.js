const store = {
	entities: {
		places: [],
		render: [],
	},
	root: document.querySelector('#root'),
};

const selectors = {
	places: () => store.entities.render,
	placeByXid: (xid) =>
		store.entities.render.find((place) => place.xid === xid),
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
