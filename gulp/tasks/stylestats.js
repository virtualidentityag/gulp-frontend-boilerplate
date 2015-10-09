var gulp   = require('gulp');
var stats  = require('gulp-stylestats');
var config = require('./../config');


gulp.task('stylestats', function () {

    return gulp.src([
        config.global.dist + '/resources/css/styles.all.min.css'
    ])
        .pipe( stats() );

});