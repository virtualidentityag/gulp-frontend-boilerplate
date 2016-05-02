var gulp = require('gulp');
var jsonlint = require('gulp-jsonlint');
var cached = require('gulp-cached');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var config = require('./../config');


gulp.task('lint:json', function () {

	return gulp.src(config.global.src + "/_mock/**/*.json")
		.pipe(cached('json'))
		.pipe(jsonlint())
		.pipe(jsonlint.reporter());

});


gulp.task('watch:json', function () {

	watch([
		config.global.src + '/_mock/**/*.json'
	], function () {
		runSequence('lint:json');
	});

});
