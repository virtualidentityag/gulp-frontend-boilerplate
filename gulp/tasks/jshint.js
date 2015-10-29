var gulp        = require('gulp');
var jshint      = require('gulp-jshint');
var stylish     = require('jshint-stylish');
var cached      = require('gulp-cached');
var config      = require('./../config');


gulp.task('jshint', function() {

    return gulp.src([
        config.global.src + '/resources/js/**/*.js',
        '!' + config.global.src + '/resources/js/vendor/**/*.js',
        '!' + config.global.src + '/resources/bower_components/**/*.js'
    ])
        .pipe( cached('jshint') )
        .pipe( jshint() )
        .pipe( jshint.reporter(stylish) );

});

gulp.task('watch:jshint', function () {

    gulp.watch([
        config.global.src + '/resources/js/**/*.js',
        '!' + config.global.src + '/resources/js/vendor/**/*.js',
        '!' + config.global.src + '/resources/bower_components/**/*.js'
    ], ['jshint']);

});
