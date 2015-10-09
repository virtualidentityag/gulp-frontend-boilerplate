var gulp      = require('gulp');
var useref    = require('gulp-useref');
var zetzer    = require('gulp-zetzer');
var gulpif    = require('gulp-if');
var uglify    = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var config    = require('./../config');


gulp.task('useref', function () {

    return gulp.src( config.global.dev + '/*.html' )
        .pipe( useref() )
        .pipe( gulp.dest(config.global.dist ) );

});

gulp.task('useref:assets', function () {

    var assets = useref.assets();
    return gulp.src( config.global.src + '/resources/_useref.html')
        .pipe( zetzer( config.zetzer ) )
        .pipe( assets )
        .pipe( gulpif('*.js', uglify( config.uglify )) )
        .pipe( gulpif('*.css', minifyCss( config.minifyCss )) )
        .pipe( assets.restore() )
        .pipe( gulp.dest( config.global.dist ) );

});