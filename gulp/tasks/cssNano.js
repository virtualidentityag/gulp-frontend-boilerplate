var gulp      = require('gulp');
var size      = require('gulp-size');
var cssNano = require('gulp-cssnano');
var config    = require('./../config');


gulp.task('cssNano:dist', function () {

    return gulp.src( config.global.dev + '/resources/css/**/*.css')
        .pipe( cssNano( config.cssNano ) )
        .pipe( size({
            title: 'minified',
            showFiles: true
        }) )
        .pipe( gulp.dest( config.global.dist + '/resources/css/') );

});