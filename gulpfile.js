// Основной модуль.
import gulp from 'gulp';
// Импорт путей.
import { path } from './gulp/config/path.js';
// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

// Передача значений в глобальную переменную.
global.app = {
	path,
	gulp,
	plugins,
};

// Импорт задач.
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js, appJs } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import {
	otfToTtf,
	ttfToWoff,
	fontsStyle,
	copyFonts,
} from './gulp/tasks/fonts.js';

// Наблюдатель за изменением файлов.
function watcher() {
	gulp.watch(path.watch.images, images);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
}

// Преобразование шрифтов otf в ttf и ttf в woff и woff2
const fonts = gulp.series(otfToTtf, ttfToWoff);

// Копирование шрифтов и создание файла font
const handleFonts = gulp.series(copyFonts, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(
	handleFonts,
	gulp.parallel(images, html, scss, js, appJs)
);

// Построение сценариев выполнения задач.
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Выполнение специальных сценариев
export { fonts };

// Выполнение сценария по умолчанию.
export default dev;
