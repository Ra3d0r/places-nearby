function toggleSelectCategories(event) {
	const optionMenu = event.target.parentElement;
	optionMenu.classList.toggle('active');
}

function handleSelectCategories() {
	let selectedOption = option.querySelector('.option-text').innerText;
	sBtn_text.innerText = selectedOption;

	optionMenu.classList.remove('active');
}
