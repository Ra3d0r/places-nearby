function toggleSelectCategories(event) {
	const optionMenu = event.currentTarget;
	if (optionMenu.classList.value.includes('active')) {
		optionMenu.classList.remove('active');
		removeCloseSelectCategories();
	} else {
		optionMenu.classList.add('active');
		document.body.addEventListener('click', closeSelectCategories);
	}
}

function handleSelectCategories() {
	const selectedOption = this.innerText;
	const dataCategory = this.dataset.category;

	const optionMenu = this.parentElement.parentElement;
	const sBtnText = optionMenu.querySelector('.sBtn-text');

	sBtnText.innerText = selectedOption;
	sBtnText.dataset.category = dataCategory;
}

function closeSelectCategories(event) {
	const isSelectCategories = !!event.target.closest('.select-categories');
	if (!isSelectCategories) {
		const selectCategories = document.querySelector('.select-categories');
		selectCategories.classList.remove('active');
		removeCloseSelectCategories();
	}
}

function removeCloseSelectCategories() {
	document.body.removeEventListener('click', closeSelectCategories);
}
