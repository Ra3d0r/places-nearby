import plumber from 'gulp-plumber'; // обработка ошибок
import notify from 'gulp-notify'; // Уведомления
import browserSync from 'browser-sync';
import newer from 'gulp-newer';

export const plugins = {
	plumber,
	notify,
	browserSync,
	newer,
};
