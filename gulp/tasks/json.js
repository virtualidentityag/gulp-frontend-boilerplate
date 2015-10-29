var gulp     = require('gulp');
var jsonlint = require('gulp-jsonlint');
var cached   = require('gulp-cached');
var config   = require('./../config');


gulp.task('lint:json', function () {

    return gulp.src( config.global.src + "/_mock/**/*.json")
        .pipe( cached('json') )
        .pipe( jsonlint() )
        .pipe( jsonlint.reporter() );

});



gulp.task('watch:json', function () {

    gulp.watch([
        config.global.src + '/_mock/**/*.json'
    ], ['lint:json']);

});
