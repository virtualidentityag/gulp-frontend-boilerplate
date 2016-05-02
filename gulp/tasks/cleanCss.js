var gulp = require('gulp');
var size = require('gulp-size');
var cleanCss = require('gulp-clean-css');
var config = require('./../config');


gulp.task('minifyCss:dist', function () {

	return gulp.src(config.global.dev + '/resources/css/**/*.css')
		.pipe(cleanCss(config.cleanCss))
		.pipe(size({
			title: 'minified',
			showFiles: true
		}))
		.pipe(gulp.dest(config.global.dist + '/resources/css/'));

});
