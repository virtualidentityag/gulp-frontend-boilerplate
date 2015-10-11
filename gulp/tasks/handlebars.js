var gulp       = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap       = require('gulp-wrap');
var declare    = require('gulp-declare');
var concat     = require('gulp-concat');
var config     = require('./../config');


gulp.task('handlebars', function(){

    gulp.src( config.global.src + '/resources/templates/*.hbs' )
        .pipe( handlebars() )
        .pipe( wrap('Handlebars.template(<%= contents %>)') )
        .pipe( declare({
            namespace: 'global.configuration.data.tpl',
            noRedeclare: true
        }))
        .pipe( concat('handlebars.templates.js') )
        .pipe( gulp.dest( config.global.dev + '/resources/js/') );

});

gulp.task('watch:handlebars', function () {

    gulp.watch([
        config.global.src + '/resources/templates/**/*.hbs',
        config.global.src + '/resources/js/handlebars.helper.js'
    ], ['handlebars']);

});