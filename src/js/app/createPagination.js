function createPagination() {
	const pagination = document.createElement('div');
	pagination.classList.add('pagination');
	pagination.innerHTML = ` <input
			type="radio"
			name="toggle"
			id="toggle-1"
			${store.activePages === 1 ? 'checked' : ''}
		/>
		<label class="label-1" for="toggle-1">1</label>
		<input
			type="radio"
			name="toggle"
			id="toggle-2"
			${store.activePages === 2 ? 'checked' : ''}
		/>
		<label class="label-2" for="toggle-2">2</label>
		<input
			type="radio"
			name="toggle"
			id="toggle-3"
			${store.activePages === 3 ? 'checked' : ''}
		/>
		<label class="label-3" for="toggle-3">3</label>
		<input
			type="radio"
			name="toggle"
			id="toggle-4"
			${store.activePages === 4 ? 'checked' : ''}
		/>
		<label class="label-4" for="toggle-4">4</label>
		<input
			type="radio"
			name="toggle"
			id="toggle-5"
			${store.activePages === 5 ? 'checked' : ''}
		/>
		<label class="label-5" for="toggle-5">5</label>
		<input
			type="radio"
			name="toggle"
			id="toggle-6"
			${store.activePages === 6 ? 'checked' : ''}
		/>
		<label class="label-6" for="toggle-6">6</label>
		<input
			type="radio"
			name="toggle"
			id="toggle-7"
			${store.activePages === 7 ? 'checked' : ''}
		/>
		<label class="label-7" for="toggle-7">7</label>
		<input
			type="radio"
			name="toggle"
			id="toggle-8"
			${store.activePages === 8 ? 'checked' : ''}
		/>
		<label class="label-8" for="toggle-8">8</label>`;
	pagination.querySelectorAll('input').forEach((input) => {
		input.addEventListener('click', handlePagination);
	});
	return pagination;
}

function handlePagination() {
	const id = Number(this.id.split('-')[1]);
	if (store.activePages === id) {
		return;
	}
	store.activePages = id;
	getCurrentPages(id);
	detachEventPagination(this.parentElement);
}

function detachEventPagination(parent) {
	parent.querySelectorAll('input').forEach((input) => {
		input.removeEventListener('click', handlePagination);
	});
}
