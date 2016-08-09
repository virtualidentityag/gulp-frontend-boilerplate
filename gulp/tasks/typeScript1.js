var gulp = require('gulp');
var typescript = require('gulp-typescript');
var mergeStream = require('merge-stream');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var config = require('./../config');


gulp.task('typescript', function () {

	return mergeStream(config.global.resources.map( function(currentResource) {
		return gulp.src(config.global.src + currentResource + '/js/**/*.ts')
			.pipe(typescript(config.typescript))
			.pipe(gulp.dest(config.global.dev + currentResource + '/js/'));
	}));

});

gulp.task('watch:typescript', function () {

	config.global.resources.forEach(function(currentResource) {
		watch([
			config.global.src + currentResource + '/js/**/*.ts'
		], function () {
			runSequence('typescript');
		});
	});

});
