var gulp   = require('gulp');
var watch  = require("gulp-watch");
var config = require('./../config');

gulp.task('watch:test', function () {

    gulp.watch([
        'app/resources/**/*.js'
    ], function( file ) {
        console.log( 'watch called for ' + file.path );
    });

});

gulp.task('watch:test2', function () {

    watch([
        'app/resources/**/*.js'
    ], function(file) {
        console.log( 'gulp-watch called for ' + file.path );
    });

});