function createPlaceInfo({ info: { name, wikipedia_extracts, preview } }) {
	const description = wikipedia_extracts?.html || 'Description none';
	const source = preview?.source || 'https://placehold.co/400';

	const section = document.createElement('div');
	section.classList.add('placeItem-section');
	section.innerHTML = `<div class="container">
            <div class="placeItem-section__button">
            </div>
            <div class="placeItem-section__place-item-container">
              <div class="place-item">
                <div class="place-item__container-image"><img class="place-item__img" src=${source} alt="place" width="400" height="300"/></div>
                <div class="place-item__text">
                  <h1 class="place-item__title">${name}</h1>
                  <div class="place-item__description">${description}</div>
                </div>
              </div>
            </div>
            <div class="placeItem-section__map" id="map"></div>
          </div>`;
	const button = createPlaceInfoButton();
	section.querySelector('.placeItem-section__button').append(button);
	return section;
}

function createPlaceInfoButton() {
	const button = document.createElement('button');
	button.classList.add('main-button', 'main-button_mini');
	button.innerHTML = `<span class="main-button__text">BACK</span>`;
	button.addEventListener('click', backToPlaces);
	return button;
}

function backToPlaces(event) {
	event.target.removeEventListener('click', backToPlaces);
	startRenderPlaces();
}
