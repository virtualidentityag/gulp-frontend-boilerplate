var gulp = require('gulp');
var config = require('./../config');

gulp.task('copy:dev:bower', function () {

	return gulp.src(config.global.src + '/resources/bower_components/**/*')
		.pipe(gulp.dest(config.global.dev + '/resources/bower_components/'));

});

gulp.task('copy:dev:js', function () {

	return gulp.src(config.global.src + '/resources/js/*.js')
		.pipe(gulp.dest(config.global.dev + '/resources/js/'));

});

gulp.task('copy:dist:bower', function () {

	return gulp.src(config.global.src + '/resources/bower_components/**/*')
		.pipe(gulp.dest(config.global.dist + '/resources/bower_components/'));

});

gulp.task('copy:dev:js:vendor', function () {

	return gulp.src(config.global.src + '/resources/js/vendor/**/*')
		.pipe(gulp.dest(config.global.dev + '/resources/js/vendor/'));

});

gulp.task('copy:dist:js:vendor', function () {

	return gulp.src(config.global.dev + '/resources/js/vendor/**/*')
		.pipe(gulp.dest(config.global.dist + '/resources/js/vendor/'));

});

gulp.task('copy:dist:flash', function () {

	return gulp.src(config.global.src + '/resources/flash/**/*')
		.pipe(gulp.dest(config.global.dist + '/resources/flash/'));

});

gulp.task('copy:dist:json', function () {

	return gulp.src(config.global.src + '/resources/json/**/*')
		.pipe(gulp.dest(config.global.dist + '/resources/json/'));

});

gulp.task('copy:dist:fonts', function () {

	return gulp.src([
			config.global.src + '/resources/fonts/**/*',
			config.global.dev + '/resources/fonts/**/*'
		])
		.pipe(gulp.dest(config.global.dist + '/resources/fonts/'));

});

gulp.task('copy:dist:img', function () {

	return gulp.src(config.global.src + '/resources/img/**/*')
		.pipe(gulp.dest(config.global.dist + '/resources/img/'));

});

gulp.task('copy:dist:assets', function () {

	return gulp.src(config.global.src + '/_assets/**/*')
		.pipe(gulp.dest(config.global.dist + '/_assets/'));

});

gulp.task('copy:dist:css', function () {

	return gulp.src(config.global.src + '/resources/css/**/*.css')
		.pipe(gulp.dest(config.global.dist + '/resources/css/'));

});

gulp.task('copy:dist:mock', function () {

	return gulp.src(config.global.src + '/_mock/**/*')
		.pipe(gulp.dest(config.global.dist + '/_mock/'));

});


// additional resources

gulp.task('copy:additional:dev:bower', function () {

	return gulp.src(config.global.src + config.global.additionalResources + '/bower_components/**/*')
		.pipe(gulp.dest(config.global.dev + config.global.additionalResources + 'bower_components/'));

});

gulp.task('copy:additional:dev:js', function() {

	return gulp.src(config.global.src + config.global.additionalResources + '/js/**/*.js')
		.pipe(gulp.dest(config.global.dev + config.global.additionalResources + '/js/'));

});

gulp.task('copy:additional:dist:bower', function () {

	return gulp.src(config.global.src + config.global.additionalResources + '/bower_components/**/*')
		.pipe(gulp.dest(config.global.dist + config.global.additionalResources + '/bower_components/'));

});

gulp.task('copy:additional:dev:js:vendor', function() {

	return gulp.src(config.global.src + config.global.additionalResources + '/js/vendor/**/*')
		.pipe(gulp.dest(config.global.dev + config.global.additionalResources + '/js/vendor/'));

});

gulp.task('copy:additional:dist:js:vendor', function() {

	return gulp.src(config.global.src + config.global.additionalResources + '/js/vendor/**/*')
		.pipe(gulp.dest(config.global.dist + config.global.additionalResources + '/js/vendor/'));

});

gulp.task('copy:additional:dist:img', function() {

	return gulp.src(config.global.src + config.global.additionalResources + '/img/**/*')
		.pipe(gulp.dest(config.global.dist + config.global.additionalResources + '/img/'));

});


gulp.task('copy:additional:dist:flash', function () {

	return gulp.src(config.global.src + config.global.additionalResources + '/flash/**/*')
		.pipe(gulp.dest(config.global.dist + config.global.additionalResources + '/flash/'));

});

gulp.task('copy:additional:dist:json', function () {

	return gulp.src(config.global.src + config.global.additionalResources + '/json/**/*')
		.pipe(gulp.dest(config.global.dist + config.global.additionalResources + '/json/'));

});

gulp.task('copy:additional:dist:fonts', function () {

	return gulp.src([
		config.global.src + config.global.additionalResources + '/fonts/**/*',
		config.global.dev + config.global.additionalResources + '/fonts/**/*'
	])
		.pipe(gulp.dest(config.global.dist + config.global.additionalResources + '/fonts/'));

});

gulp.task('copy:additional:dist:css', function () {

	return gulp.src(config.global.src + config.global.additionalResources + '/css/**/*.css')
		.pipe(gulp.dest(config.global.dist + config.global.additionalResources + '/css/'));

});
