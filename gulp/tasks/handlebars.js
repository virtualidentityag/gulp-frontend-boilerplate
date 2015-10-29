var gulp       = require('gulp');
var path       = require('path');
var handlebars = require('gulp-handlebars');
var wrap       = require('gulp-wrap');
var declare    = require('gulp-declare');
var concat     = require('gulp-concat');
var merge      = require('merge-stream');
var plumber    = require('gulp-plumber');
var config     = require('./../config');


gulp.task('handlebars', function(){

    // Assume all partials start with an underscore
    var partials = gulp.src([
        config.global.src + '/resources/templates/**/_*.hbs'
    ])
        .pipe( plumber() )
        .pipe( handlebars() )
        .pipe( wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
            imports: {
                processPartialName: function(fileName) {
                    // Strip the extension and the underscore
                    // Escape the output with JSON.stringify
                    return JSON.stringify(path.basename(fileName, '.js').substr(1));
                }
            }
        }));

    var templates = gulp.src([
        config.global.src + '/resources/templates/**/[^_]*.hbs'
    ])
        .pipe( plumber() )
        .pipe( handlebars() )
        .pipe( wrap('Handlebars.template(<%= contents %>)') )
        .pipe( declare({
            namespace: 'global.configuration.data.tpl',
            noRedeclare: true
        }));

    // Output both the partials and the templates
    return merge(partials, templates)
        .pipe( concat('handlebars.templates.js') )
        .pipe( gulp.dest( config.global.dev + '/resources/js/' ));

});

gulp.task('watch:handlebars', function () {

    gulp.watch([
        config.global.src + '/resources/templates/**/*.hbs',
        config.global.src + '/resources/js/handlebars.helper.js'
    ], ['handlebars']);

});
