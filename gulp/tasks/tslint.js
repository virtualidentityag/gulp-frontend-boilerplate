var gulp = require('gulp');
var config = require('./../config');
var tslint = require('gulp-tslint');

gulp.task('tslint', function () {
    gulp.src(config.typescript.files)
        .pipe(tslint(config.tslint))
        .pipe(tslint.report({
            emitError: false
        }))
});