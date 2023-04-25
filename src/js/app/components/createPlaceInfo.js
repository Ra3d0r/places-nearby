function createPlaceInfo({ name, wikipedia_extracts, preview, address, info }) {
	const description =
		wikipedia_extracts?.html || info?.descr || 'Description none';
	const source = preview?.source || '/img/place.png';
	const strAddress = makeAddress(address);

	const section = document.createElement('div');
	section.classList.add('placeItem-section');
	section.innerHTML = `<div class="placeItem-section__button"></div>
		<div class="placeItem-section__place-item-container">
			<div class="place-item">
				<div class="place-item__container-image">
					<img
						class="place-item__img"
						src=${source}
						alt="place"
						width="400"
						height="300"
					/>
				</div>
				<div class="place-item__text">
					<h1 class="place-item__title">${name}</h1>
					<div class="place-item__description">${description}</div>
				</div>
				<div class="place-item__map-container">
					<h3 class="place-item__subtitle">
						${store.lang === 'en' ? 'Location on the map' : 'Месторасположение на карте'}
					</h3>
					<div id="map"></div>
					<h2 class="place-item__address">${strAddress}</h2>
				</div>
			</div>
		</div> `;
	const button = createPlaceInfoButton();
	section.querySelector('.placeItem-section__button').append(button);
	return section;
}

function createPlaceInfoButton() {
	const button = document.createElement('button');
	button.classList.add('main-button', 'main-button_mini');
	button.innerHTML = `<span class="main-button__text">${
		store.lang === 'en' ? 'BACK' : 'НАЗАД'
	}</span>`;
	button.addEventListener('click', backToPlaces, { once: true });
	return button;
}

function makeAddress(address) {
	const {
		country,
		city,
		state_district,
		state,
		suburb,
		house,
		house_number,
		road,
	} = address;
	const validCity = city === state ? city : `${state || ''}, ${city || ''}`;
	const arrStringAddress = [
		country,
		validCity,
		state_district,
		road,
		suburb,
		house,
		house_number,
	];
	const stringAddress = arrStringAddress
		.reduce((acc, el) => {
			if (el) {
				acc += `${el}, `;
			}
			return acc;
		}, '')
		.slice(0, -2);
	return stringAddress;
}
