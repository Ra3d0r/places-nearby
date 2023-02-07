function toggleSelectCategories(event) {
	const optionMenu = event.currentTarget;
	optionMenu.classList.toggle('active');
}

function handleSelectCategories() {
	const selectedOption = this.innerText;
	const optionMenu = this.parentElement.parentElement;
	const sBtnText = optionMenu.querySelector('.sBtn-text');

	sBtnText.innerText = selectedOption;
}
