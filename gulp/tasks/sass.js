var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sassLint     = require('gulp-sass-lint');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cached       = require('gulp-cached');
var config       = require('./../config');


gulp.task('sass', function () {

    return gulp.src( [
        config.global.src + '/resources/css/**/*.scss',
        '!' + config.global.src + '/resources/css/**/_*.scss'
    ])
        .pipe( sass().on('error', sass.logError) )
        .pipe( postcss([
            autoprefixer( config.autoprefixer )
        ]))
        .pipe( gulp.dest( config.global.dev + '/resources/css' ) );

});

gulp.task('lint:sass', function () {

    return gulp.src( config.global.src + 'resources/css/**/*.s+(a|c)ss')
        .pipe( cached('sass') )
        .pipe( sassLint())
        .pipe( sassLint.format())
        .pipe( sassLint.failOnError());

});

gulp.task('watch:sass', function () {

    gulp.watch([
        config.global.src + '/resources/css/**/*.scss'
    ], ['sass']);

});
