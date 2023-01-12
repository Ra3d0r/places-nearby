import webpHtmlNoSvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import GulpPug from 'gulp-pug';
import fs from 'fs';
const dataFromFile = JSON.parse(fs.readFileSync(`src/data/nav.json`, 'utf-8'));

export function html() {
	return app.gulp
		.src(app.path.src.html)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'HTML',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(
			GulpPug({
				locals: dataFromFile || {},
				// сжатие html файла
				pretty: true,
				// показывать какой файл отработан
				verbose: true,
			})
		)
		.pipe(webpHtmlNoSvg())
		.pipe(
			versionNumber({
				value: '%DT%',
				append: {
					key: '_v',
					cover: 0,
					to: ['css', 'js'],
				},
				output: {
					file: 'gulp/version.json',
				},
			})
		)
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browserSync.stream());
}
