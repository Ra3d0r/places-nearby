(function initApp() {
	const optionMenu = document.querySelector('.select-categories');
	const options = optionMenu.querySelectorAll('.option');

	const selectCategories = {
		optionMenu,
		options,
	};

	attachEventsApp(selectCategories);
})();

function attachEventsApp(selectCategories) {
	const { optionMenu, options } = selectCategories;

	optionMenu.addEventListener('click', toggleSelectCategories);

	options.forEach((option) => {
		option.addEventListener('click', handleSelectCategories);
	});
}
