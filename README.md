# Поиск мест (места рядом) - на русском.

## Содержание  
[Краткое описание](#description-ru)  
[Технологии](#theology-ru)   
[Функционал](#functional-ru)   
[Запуск проекта](#init-ru)   

<a name="description-ru"><h3 style="text-align: center">Краткое описание</h3></a>

Веб сайт, состоящий их двух страниц на двух языках со сменой темной темы, служит для поиска мест по названию города. Первая страница это лендинг с кратким описанием, вторая страница это приложение с возможностью поиска по категориям, фильтрацией и сортировкой, также включающие пагинацию и движение по истории.

# [Посмотреть демо](https://ra3d0r.github.io/places-nearby/index-ru.html) 

![Пример поиска мест](https://raw.githubusercontent.com/Ra3d0r/places-nearby/gif/example.gif)

----
<a name="theology-ru"><h3 style="text-align: center">Технологии</h3></a>

В данном проекте не используются внешние библиотеки, кроме библиотеки карт. Весь функционал написан на ванильном JavaScript.

Список основных технологий:
- GULP
- SASS
- PUG
- BABEL

Вспомогательные технологии можно найти в файле package.json


<a name="functional-ru" ><h3 style="text-align: center">Функционал</h3></a>

1. Переключение темы
2. Выбор языка
3. Сохранение некоторых состояний в локальное хранилище
4. Роутинг и движение по истории со сохранением состояния (History API)
5. Получение данных о местах с помощью внешнего API
6. Фильтрация и сортировка
7. Пагинация
8. Рендер из созданного стора, если данные уже есть
9. Уведомление пользователя (загрузка, ничего не найдено)
10. Автоматический скролл к необходимому месту
11. Отдельное меню для пользователей телефона
12. Анимации с помощью CSS и JS
13. Адаптив под основные типы устройств

Данные о местах были получены от OpenTripMap API: https://opentripmap.io/ru/product  
Использовалась карта от leaflet: https://leafletjs.com/


<a name="init-ru" ><h3 style="text-align: center">Запуск проекта</h3></a>

Примечание: для работы проекта необходим Node.js и пакетный менеджер npm. Для дальнейших действий необходимо их установить.

1. Установка всех пакетов и зависимостей. Для этого необходимо ввести команду:
```no-highlight
npm i
```

2. Запуск сборки проекта. После установки всех зависимостей необходимо ввести команду:

```no-highlight
npm run gulp
```

После сборки проекта автоматически произойдет запуск сервера с помощью browser-sync и открытие проекта в браузере по умолчанию.



# Find place (places nearby) - English.

## Content 
[Short description](#description)  
[Technologies](#theology)   
[Functional](#functional)   
[Project Launch](#init)   

<a name="description"><h3 style="text-align: center">Short description</h3></a>

Web site consisting of two pages in two languages with a change of dark theme, serves to search for places by city name. The first page is a landing page with a brief description, the second page is an application with the ability to search by category, filtering and sorting, also including pagination and movement through history.

# [View demo](https://ra3d0r.github.io/places-nearby/) 

![An example of finding places](https://raw.githubusercontent.com/Ra3d0r/places-nearby/gif/example.gif)

----
<a name="theology"><h3 style="text-align: center">Technologies</h3></a>

This project does not use external libraries, except the map library. All functionality is written in vanilla JavaScript.

A list of basic technologies:
- GULP
- SASS
- PUG
- BABEL

Supporting technologies can be found in the package.json file


<a name="functional" ><h3 style="text-align: center">Functional</h3></a>

1. Switching the theme
2. Choosing a language
3. Saving some states to local storage
4. Routing and moving through history with state preservation (History API)
5. Getting data from external API 
6. Filtering and sorting
7. Pagination
8. Render from the created store, if the data already exists
9. User notification (loading, nothing found)
10. Automatic scrolling to the required place
11. Separate menu for phone users
12. Animations using CSS and JS
13. Adaptive for main types of devices

The data is taken from OpenTripMap API: https://opentripmap.io/product  
A library of maps was used leaflet: https://leafletjs.com/


<a name="init" ><h3 style="text-align: center">Project Launch</h3></a>

Note: Node.js and the npm package manager are required for the project to work. For further actions it is necessary to install them.

1. Install all packages and dependencies. To do this, enter the command:
```no-highlight
npm i
```

2. Start the build of the project. After installing all the dependencies, you must enter the command:

```no-highlight
npm run gulp
```

After building the project, the server will automatically start with browser-sync and open the project in the default browser.
