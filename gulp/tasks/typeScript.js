var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('./../config');
var ts = require('gulp-typescript');

gulp.task('typescript', function () {
    return gulp.src(config.typescript.files)
        .pipe(ts(config.typescript.compilerOptions))
        .pipe(gulp.dest(config.global.dev + '/resources/js'));
});