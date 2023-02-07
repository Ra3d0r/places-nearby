(function initApp() {
	const optionMenu = document.querySelector('.select-categories'),
		selectBtn = optionMenu.querySelector('.select-btn'),
		options = optionMenu.querySelectorAll('.option'),
		sBtnText = optionMenu.querySelector('.sBtn-text');

	const selectCategories = {
		optionMenu,
		selectBtn,
		options,
		sBtnText,
	};

	attachEventsApp(selectCategories);
})();

function attachEventsApp(selectCategories) {
	const { optionMenu, selectBtn, options, sBtnText } = selectCategories;

	selectBtn.addEventListener('click', toggleSelectCategories);

	options.forEach((option) => {
		option.addEventListener('click', handleSelectCategories);
	});
}
