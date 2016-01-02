var gulp      = require('gulp');
var size      = require('gulp-size');
var minifyCss = require('gulp-minify-css');
var config    = require('./../config');


gulp.task('minifyCss:dist', function () {

    return gulp.src( config.global.dev + '/resources/css/**/*.css')
        .pipe( minifyCss( config.minifyCss ) )
        .pipe( size({
            title: 'minified',
            showFiles: true
        }) )
        .pipe( gulp.dest( config.global.dist + '/resources/css/') );

});