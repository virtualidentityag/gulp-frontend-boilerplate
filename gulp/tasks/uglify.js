var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var config = require('./../config');


gulp.task('uglify:dist', function () {

    return gulp.src( config.global.dev + '/resources/js/*.js')
        .pipe( uglify( config.uglify ) )
        .pipe( gulp.dest( config.global.dist + '/resources/js/' ) );

});