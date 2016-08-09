var gulp = require('gulp');
var size = require('gulp-size');
var uglify = require('gulp-uglify');
var mergeStream = require('merge-stream');
var config = require('./../config');


gulp.task('uglify:dist', function () {

	return mergeStream(config.global.resources.map( function(currentResource) {
		return gulp.src(config.global.dev + currentResource + '/js/**/*.js')
			.pipe(uglify())
			.pipe(size({
				title: 'uglified',
				showFiles: true
			}))
			.pipe(gulp.dest(config.global.dist + currentResource + '/js/'));
	}));

});
