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
