var gulp   = require('gulp');
var config = require('./../config');


gulp.task('watch:js', function () {

    gulp.watch([
        config.global.src + '/resources/js/**/*.js'
    ], ['jshint']);

});