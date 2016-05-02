var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var htmlmin = require('gulp-htmlmin');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var config = require('./../config');

gulp.task('angularTemplates', function () {

	return gulp.src([
			config.global.src + '/resources/templates/angular/**/*.html'
		])
		.pipe(htmlmin({removeComments: true}))
		.pipe(templateCache('angular.templates.js', {
			module: 'templateCache',
			standalone: true,
			moduleSystem: 'IIFE'
		}))
		.pipe(gulp.dest(config.global.dev + '/resources/js/'));

});


gulp.task('watch:angularTemplates', function () {

	watch([
		config.global.src + '/resources/templates/angular/**/*.html'
	], function () {
		runSequence('angularTemplates')
	});

});
