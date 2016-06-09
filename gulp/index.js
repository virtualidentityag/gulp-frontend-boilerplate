var gulp = require('gulp');
var runSequence = require('run-sequence');

// Prevent errors caused by too many listeners in gulp-watch
require('events').EventEmitter.defaultMaxListeners = 0;

// configure default task
gulp.task('default', ['serve']);


// build templates for development
gulp.task('build:dev', function (callback) {
	runSequence(
		'checkDependencies',
		[
			'clean:dev',
			'clean:iconfont'
		],
		[
			'lint:sass',
			'lint:json',
			'jshint',
			//'eslint',
			'iconfont'
		],
		[
			'handlebars',
			'angularTemplates'
		],
		[
			'zetzer',
			'sass',
			'sass:additional',
			'indexr',
			'copy:dev:js:vendor',
			'copy:additional:dev:js:vendor'
		],
		[
			'modernizr',
			'htmlhint'
		],
		callback
	);
});


// build templates for production
gulp.task('build', function (callback) {
	runSequence(
		[
			'clean:dist',
			'build:dev'
		],
		[
			'copy:dev:js',
			'copy:additional:dev:js',
			'copy:dev:bower',
			'copy:additional:dev:bower',
			'copy:dist:bower',
			'copy:additional:dist:bower',
			'copy:dist:flash',
			'copy:additional:dist:flash',
			'copy:dist:json',
			'copy:additional:dist:json',
			'copy:dist:fonts',
			'copy:additional:dist:fonts',
			'copy:dist:img',
			'copy:additional:dist:img',
			'copy:dist:assets',
			'copy:dist:css',
			'copy:additional:dist:css',
			'copy:dist:mock',
			'copy:dist:js:vendor',
			'copy:additional:dist:js:vendor'
		],
		[
			'uglify:dist',
			'uglify:additional:dist',
			'cleanCss:dist',
			'cleanCss:additional:dist'
		],
		[
			'useref'
		],
		[
			'useref:assets',
			'image:assets:dist',
			'image:resources:dist'
		],
		[
			'clean:useref',
			'cssstats'
		],
		callback
	);
});


// serve development templates
gulp.task('serve', function (callback) {
	runSequence(
		'build:dev',
		'connect',
		[
			'connect:open',
			'livereload',
			'watch:zetzer',
			'watch:sass',
			'watch:sass:additional',
			'watch:jshint',
			'watch:eslint',
			'watch:handlebars',
			'watch:angularTemplates',
			'watch:json',
			'watch:html'
		],
		callback
	);
});


// serve production templates
gulp.task('serve:dist', function (callback) {
	runSequence(
		'build',
		callback
	);
});
