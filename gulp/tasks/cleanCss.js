var gulp = require('gulp');
var size = require('gulp-size');
var cleanCss = require('gulp-clean-css');
var mergeStream = require('merge-stream');
var config = require('./../config');

gulp.task('cleanCss:dist', function () {

	return mergeStream(config.global.resources.map( function(currentResource) {
		return gulp.src(config.global.dev + currentResource + '/css/**/*.css')
			.pipe(cleanCss(config.cleanCss))
			.pipe(size({
				title: 'minified',
				showFiles: true
			}))
			.pipe(gulp.dest(config.global.dist + currentResource + '/css/'));
	}));

});
