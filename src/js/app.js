const store = {
	entities: [],
	root: document.querySelector('.section-places__grid-container'),
};

const selectors = {
	places: () => store.entities,
	placeByXid: (xid) => store.entities.find((place) => place.xid === xid),
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
