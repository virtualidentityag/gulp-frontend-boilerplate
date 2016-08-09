var gulp = require('gulp');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cached = require('gulp-cached');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var mergeStream = require('merge-stream');
var config = require('./../config');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {

	return mergeStream(config.global.resources.map( function(currentResource) {
		return gulp.src([
			config.global.src + currentResource + '/css/**/*.scss',
			'!' + config.global.src + currentResource + '/css/**/_*.scss'
		])
			.pipe(sourcemaps.init())
			.pipe(sass(config.sass).on('error', sass.logError))
			.pipe(postcss([
				autoprefixer(config.autoprefixer)
			]))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest(config.global.dev + currentResource + '/css'));
	}));
});

gulp.task('lint:sass', function () {

	if (config.global.tasks.linting) {
		return mergeStream(config.global.resources.map( function(currentResource) {
			return gulp.src(config.global.src + currentResource.replace('/','') + '/css/**/*.s+(a|c)ss')
				.pipe(cached('sass'))
				.pipe(sassLint())
				.pipe(sassLint.format())
				.pipe(sassLint.failOnError());
		}));
	}

});

gulp.task('watch:sass', function () {

	config.global.resources.forEach(function(currentResource) {
		watch([
			config.global.src + currentResource + '/css/**/*.scss'
		], function () {
			runSequence(
				['lint:sass'],
				['sass']
			);
		});
	});

});
