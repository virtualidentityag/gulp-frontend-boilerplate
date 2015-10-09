var gulp   = require('gulp');
var config = require('./../config');


gulp.task('copy:dev:bower', function() {

    return gulp.src( config.global.src + '/resources/bower_components/**/*' )
        .pipe( gulp.dest( config.global.dev + '/resources/bower_components/' ) );

});

gulp.task('copy:dev:js', function() {

    return gulp.src( config.global.src + '/resources/js/*.js' )
        .pipe( gulp.dest( config.global.dev + '/resources/js/' ) );

});


gulp.task('copy:dist:bower', function() {

    return gulp.src( config.global.src + '/resources/bower_components/**/*' )
        .pipe( gulp.dest( config.global.dist + '/resources/bower_components/' ) );

});

gulp.task('copy:dev:js:vendor', function() {

    return gulp.src( config.global.src + '/resources/js/vendor/**/*' )
        .pipe( gulp.dest( config.global.dev + '/resources/js/vendor/' ) );

});

gulp.task('copy:dist:js:vendor', function() {

    return gulp.src( config.global.dev + '/resources/js/vendor/**/*' )
        .pipe( gulp.dest( config.global.dist + '/resources/js/vendor/' ) );

});

gulp.task('copy:dist:flash', function() {

    return gulp.src( config.global.src + '/resources/flash/**/*' )
        .pipe( gulp.dest( config.global.dist + '/resources/flash/' ) );

});

gulp.task('copy:dist:fonts', function() {

    return gulp.src( config.global.src + '/resources/fonts/**/*' )
        .pipe( gulp.dest( config.global.dist + '/resources/fonts/' ) );

});

gulp.task('copy:dist:img', function() {

    return gulp.src( config.global.src + '/resources/img/**/*' )
        .pipe( gulp.dest( config.global.dist + '/resources/img/' ) );

});

gulp.task('copy:dist:assets', function() {

    return gulp.src( config.global.src + '/_assets/**/*' )
        .pipe( gulp.dest( config.global.dist + '/_assets/' ) );

});

gulp.task('copy:dist:mock', function() {

    return gulp.src( config.global.src + '/_mock/**/*' )
        .pipe( gulp.dest( config.global.dist + '/_mock/' ) );

});