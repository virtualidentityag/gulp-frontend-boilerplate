var gulp = require('gulp');
var favicons = require("gulp-favicons");
var config = require('./../config');

gulp.task("favicons", function () {
	return gulp.src(config.global.src + '/resources/favicon.png')
		.pipe(favicons(config.favicons))
		.pipe(gulp.dest(config.global.dist + '/favicons/'));
});

