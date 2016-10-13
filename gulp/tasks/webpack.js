var gulp = require('gulp');

var webpack = require('webpack-stream');
var mergeStream = require('merge-stream');
// var typescript = require('gulp-typescript');
// var cached = require('gulp-cached');
// var watch = require('gulp-watch');
// var runSequence = require('run-sequence');

var config = require('./../config');


gulp.task('webpack', function () {

	return mergeStream(config.global.resources.map( function(currentResource) {
		return gulp.src(config.global.src + currentResource + '/js/demo3.ts')
			.pipe(webpack(config.webpack))
			.pipe(gulp.dest(config.global.dev + currentResource + '/js/'));
	}));

});

// gulp.task('lint:typescript', function () {
//
// 	return mergeStream(config.global.resources.map( function(currentResource) {
// 		return gulp.src(config.global.src + currentResource.replace('/','') + '/js/**/*.ts')
// 			.pipe(cached('ts'))
// 			.pipe(tslint(config.tslint))
// 			.pipe(tslint.report({
// 				emitError: false
// 			}));
// 	}));
//
// });
//
// gulp.task('watch:typescript', function () {
//
// 	config.global.resources.forEach(function(currentResource) {
// 		watch([
// 			config.global.src + currentResource + '/js/**/*.ts'
// 		], function () {
// 			runSequence(
// 				['lint:typescript'],
// 				['typescript']
// 			);
// 		});
// 	});
//
// });
