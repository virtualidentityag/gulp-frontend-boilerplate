var gulp   = require('gulp');
var image  = require('gulp-image');
var config = require('./../config');


gulp.task('image:assets:dist', function () {

    return gulp.src( config.global.dist + '/assets/**/*' )
        .pipe( image() )
        .pipe( gulp.dest( config.global.dist + '/assets/' ) );

});

gulp.task('image:resources:dist', function () {

    return gulp.src( config.global.dist + '/resources/img/**/*' )
        .pipe( image() )
        .pipe( gulp.dest( config.global.dist + '/resources/img/' ) );

});