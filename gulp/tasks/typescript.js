var gulp = require('gulp');
var typescript = require('gulp-typescript');
var tslint = require('gulp-tslint');
var mergeStream = require('merge-stream');
var watch = require('gulp-watch');
var cached = require('gulp-cached');
var runSequence = require('run-sequence');
var globule = require('globule');
var fs = require('fs');
var path = require('path');
var config = require('./../config');


gulp.task('typescript', function () {

	return mergeStream(config.global.resources.map( function(currentResource) {
		return gulp.src(config.global.src + currentResource + '/js/**/*.ts')
			.pipe(typescript(config.typescript))
			.pipe(gulp.dest(config.global.dev + currentResource + '/js/'));
	}));

});

gulp.task('typescript:new', function () {

	return mergeStream(config.global.resources.map( function(currentResource) {
		var result = [];
		var conf = config.typescript;
		var files = globule.find(config.global.src + currentResource + '/js/*.ts');

		for (var index in files) {
			var file = path.parse(files[index]);
			conf.outFile = file.name + '.js';

			result.push(gulp.src(files[index])
				.pipe(typescript(conf))
				.pipe(gulp.dest(config.global.dev + currentResource + '/js/')));
		}

		return mergeStream(result);
	}));

});

gulp.task('lint:typescript', function () {

	return mergeStream(config.global.resources.map( function(currentResource) {
		return gulp.src(config.global.src + currentResource.replace('/','') + '/js/**/*.ts')
			.pipe(cached('ts'))
			.pipe(tslint(config.tslint))
			.pipe(tslint.report({
				emitError: false
			}));
	}));

});

gulp.task('watch:typescript', function () {

	config.global.resources.forEach(function(currentResource) {
		watch([
			config.global.src + currentResource + '/js/**/*.ts'
		], function () {
			runSequence(
				['lint:typescript'],
				['typescript']
			);
		});
	});

});
