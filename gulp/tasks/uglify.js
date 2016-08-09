var gulp = require('gulp');
var size = require('gulp-size');
var uglify = require('gulp-uglify');
var mergeStream = require('merge-stream');
var config = require('./../config');
var projectConfig = require('../../projectConfig.json');
var gutil = require('gulp-util');

gulp.task('uglify:dist', function () {

	if (!projectConfig.tasks.uglify) {
		gutil.log(gutil.colors.yellow('uglify disabled'));
	}

	return mergeStream(config.global.resources.map( function(currentResource) {
		return gulp.src(config.global.dev + currentResource + '/js/**/*.js')
			.pipe(projectConfig.tasks.uglify ? uglify() : gutil.noop())
			.pipe(projectConfig.tasks.uglify ? size({
				title: 'uglified',
				showFiles: true
			}) : gutil.noop())
			.pipe(gulp.dest(config.global.dist + currentResource + '/js/'));
	}));

});
