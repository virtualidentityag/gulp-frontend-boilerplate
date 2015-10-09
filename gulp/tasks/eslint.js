var gulp   = require('gulp');
var eslint = require('gulp-eslint');
var cached = require('gulp-cached');
var config = require('./../config');


gulp.task('eslint', function () {

    return gulp.src([
        config.global.src + '/resources/js/**/*.js',
        '!' + config.global.src + '/resources/js/vendor/**/*.js',
        '!' + config.global.src + '/resources/bower_components/**/*.js'
    ])
        .pipe( cached('eslint') )
        .pipe( eslint() )
        .pipe( eslint.format() )
        .pipe( eslint.failAfterError() );

});