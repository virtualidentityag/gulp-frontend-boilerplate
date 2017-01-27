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
			'lint:typescript',
			'jshint',
			'eslint',
			'iconfont',
			'copy:dev:npm:js',
			'copy:dev:npm:css'
		],
		[
			'handlebars',
			'angularTemplates'
		],
		[
			'zetzer',
			'sass',
            'typescript',
			'webpack',
			'indexr'
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
			'copy:dev:js'
		],
		[
			'copy:dist:js',
			'copy:dist:jsx',
			'copy:dist:ts',
			'copy:dist:flash',
			'copy:dist:json',
			'copy:dist:fonts',
			'copy:dist:img',
			'copy:dist:assets',
			'copy:dist:css',
			'copy:dist:mock',
			'copy:dist:hbs'
		],
		[
			'uglify:dist',
			'cleanCss:dist'
		],
		[
			'useref'
		],
		[
			'useref:assets',
			'image:dist',
			'favicons'
		],
		[
			'inject',
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
			'watch:jshint',
			'watch:eslint',
			'watch:handlebars',
			'watch:angularTemplates',
			'watch:json',
			'watch:html',
			'watch:typescript',
			'watch:webpack'
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
