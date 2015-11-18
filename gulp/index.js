var gulp        = require('gulp');
var runSequence = require('run-sequence');


// configure default task
gulp.task('default', ['serve']);


// build templates for development
gulp.task('build:dev', function(callback) {runSequence(

    [
        'clean:dev',
        'clean:iconfont'
    ],
    [
        'lint:sass',
        'lint:json',
        'jshint',
        'iconfont'
    ],
    [
        'handlebars'
    ],
    [
        'zetzer',
        'sass',
        'indexr',
        'copy:dev:js:vendor'
    ],
    [
        'modernizr',
        'htmlhint'
    ],
    callback

);});


// build templates for production
gulp.task('build', function(callback) {runSequence(

    [
        'clean:dist',
        'build:dev'
    ],
    [
        'copy:dev:js',
        'copy:dev:bower',
        'copy:dist:bower',
        'copy:dist:flash',
        'copy:dist:fonts',
        'copy:dist:img',
        'copy:dist:assets',
        'copy:dist:mock',
        'copy:dist:js:vendor'
    ],
    [
        'uglify:dist',
        'minifyCss:dist'
    ],
    [
        'useref',
        'useref:assets',
        'image:assets:dist',
        'image:resources:dist'
    ],
    [
        'clean:useref',
        'stylestats'
    ],
    callback

);});


// serve development templates
gulp.task('serve', function(callback) {runSequence(

    'build:dev',
    'connect',
    [
        'connect:open',
        'livereload',
        'watch:zetzer',
        'watch:sass',
        'watch:jshint',
        'watch:handlebars',
        'watch:json',
        'watch:html'
    ],
    callback

);});


// serve production templates
gulp.task('serve:dist', function(callback) {runSequence(

    'build',
    callback

);});
