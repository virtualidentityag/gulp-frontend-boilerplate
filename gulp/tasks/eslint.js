var gulp = require('gulp');
var eslint = require('gulp-eslint');
var cached = require('gulp-cached');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var config = require('./../config');


gulp.task('eslint', function () {

	return gulp.src([
			config.global.src + '/resources/js/**/*.js',
			'!' + config.global.src + '/resources/js/vendor/**/*.js',
			'!' + config.global.src + '/resources/bower_components/**/*.js'
		])
		.pipe(cached('eslint'))
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('watch:eslint', function () {
	watch([
		config.global.src + '/resources/js/**/*.js',
		'!' + config.global.src + '/resources/js/vendor/**/*.js',
		'!' + config.global.src + '/resources/bower_components/**/*.js'
	], function () {
		runSequence('eslint')
	});
});
