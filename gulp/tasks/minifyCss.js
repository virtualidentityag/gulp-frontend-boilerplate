var gulp      = require('gulp');
var minifyCss = require('gulp-minify-css');
var config    = require('./../config');


gulp.task('minifyCss:dist', function () {

    return gulp.src( config.global.dev + '/resources/css/**/*.css')
        .pipe( minifyCss( config.minifyCss ) )
        .pipe( gulp.dest( config.global.dist + '/resources/css/') );

});