import rename from 'gulp-rename';
import GulpUglify from 'gulp-uglify';
import babel from 'gulp-babel';
import concat from 'gulp-concat';

export function js() {
	return app.gulp
		.src(app.path.src.js)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'JS index',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(concat('index.js'))
		.pipe(
			babel({
				presets: ['@babel/env'],
			})
		)
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(GulpUglify())
		.pipe(
			rename({
				extname: '.min.js',
			})
		)
		.pipe(app.gulp.dest(app.path.build.js));
}

export function appJs() {
	return app.gulp
		.src(app.path.src.appJs)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'JS app',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(concat('app.js'))
		.pipe(
			babel({
				presets: ['@babel/env'],
			})
		)
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(GulpUglify())
		.pipe(
			rename({
				extname: '.min.js',
			})
		)
		.pipe(app.gulp.dest(app.path.build.js));
}
