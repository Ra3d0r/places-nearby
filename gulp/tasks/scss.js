import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; // сжатие css файлов
import webpCss from 'gulp-webpcss'; // вывод WEBP изображений
import autoPrefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // группировка медиа запросов

const sass = gulpSass(dartSass);

export function scss() {
	return app.gulp
		.src(app.path.src.scss, { sourcemaps: true })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'SCSS',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(
			sass({
				outputStyle: 'expanded',
			})
		)
		.pipe(groupCssMediaQueries())
		.pipe(
			webpCss({
				webpClass: '.webp',
				noWebpClass: '.no-webp',
			})
		)
		.pipe(
			autoPrefixer({
				grid: true,
				overrideBrowserslist: ['last 3 versions'],
				cascade: true,
			})
		)
		.pipe(app.gulp.dest(app.path.build.css)) // Добавление не сжатого файла css
		.pipe(cleanCss())
		.pipe(
			rename({
				extname: '.min.css',
			})
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browserSync.stream());
}
