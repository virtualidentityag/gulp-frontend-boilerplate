var gulp     = require('gulp');
var jsonlint = require('gulp-jsonlint');
var config   = require('./../config');


gulp.task('lint:json', function () {

    return gulp.src( config.global.src + "/_mock/**/*.json")
        .pipe( jsonlint() )
        .pipe( jsonlint.reporter() );

});



gulp.task('watch:json', function () {

    gulp.watch([
        config.global.src + '/_mock/**/*.json'
    ], ['lint:json']);

});