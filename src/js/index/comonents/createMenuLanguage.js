function createMenuSelectLanguage(mobileOrDesktop) {
	const div = document.createElement('div');
	div.innerHTML = `<div class="menu-language__arrow"></div> 
        <ul class="menu-language__list">
            <li class="menu-language__item"><a class="menu-language__link" data-lang="ru">Russian</a></li>
            <li class="menu-language__item"><a class="menu-language__link" data-lang="en">English</a></li>
        </ul>`;
	div.classList.add(`menu-language`, mobileOrDesktop);
	div.querySelectorAll('a').forEach((a) =>
		a.addEventListener('click', handleSelectLanguages, { once: true })
	);
	return div;
}

function handleSelectLanguages(event) {
	const lang = event.currentTarget.dataset.lang;
	const path = location.pathname;
	const isApp = path.includes('app');
	switchLocation(lang, isApp);
}

function switchLocation(lang, isApp) {
	if (lang === 'ru') {
		location.href = isApp ? '/app-ru.html' : '/index-ru.html';
	} else if (lang === 'en') {
		location.href = isApp ? '/app.html' : '/index.html';
	}
}
