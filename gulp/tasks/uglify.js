var gulp   = require('gulp');
var size   = require('gulp-size');
var uglify = require('gulp-uglify');
var config = require('./../config');


gulp.task('uglify:dist', function () {

    return gulp.src( config.global.dev + '/resources/js/*.js')
        .pipe( uglify() )
        .pipe( size({
            title: 'uglified',
            showFiles: true
        }) )
        .pipe( gulp.dest( config.global.dist + '/resources/js/' ) );

});