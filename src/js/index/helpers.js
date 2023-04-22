function saveLocalStorage(obj, key) {
	try {
		localStorage.setItem(key, JSON.stringify(obj));
		return 'OK';
	} catch (err) {
		console.log(err);
		return null;
	}
}

function getLocalStorage(key) {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (err) {
		console.log(err);
		return null;
	}
}

function setInDom(parentElement, element) {
	if (parentElement === null) {
		throw new Error('Родительский элемент не определен');
	}

	if (element === null || element === undefined) {
		return console.log('Передан пустой элемент в setInDom');
	}
	parentElement.append(element);
}
