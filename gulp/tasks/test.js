var gulp = require('gulp');
var nightwatch = require('gulp-nightwatch');
var argv = require('yargs').argv;

gulp.task('test', function() {
  return gulp.src("./test/nightwatch/*.js")
    .pipe(nightwatch({
      configFile: 'test/nightwatch.json',
      cliArgs: ['--url ' + argv.url, '--reporter test/reporter.js']
    }))
    .on('error', function() {
		process.exit(1);
	});
});

gulp.task('test:dev', function() {
	return gulp.src("./test/nightwatch/*.js")
		.pipe(nightwatch({
			configFile: 'test/nightwatch.dev.json',
			cliArgs: ['--reporter test/reporter.js']
		}))
		.on('error', function() {
			process.exit(1);
		});
});
