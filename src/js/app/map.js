function createMap({ point: { lat, lon } }) {
	const map = L.map('map').setView([lat, lon], 13);
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution:
			'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map);
	const myIcon = L.icon({
		iconUrl: '/img/marker-icon.png',
		shadowUrl: '/img/marker-shadow.png',
	});
	const marker = L.marker([lat, lon], { icon: myIcon }).addTo(map);
	document.querySelector('.leaflet-control-attribution').remove();
}
