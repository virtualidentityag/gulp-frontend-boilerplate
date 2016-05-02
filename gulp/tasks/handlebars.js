var gulp = require('gulp');
var path = require('path');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var config = require('./../config');


gulp.task('handlebars', function () {

	// Assume all partials start with an underscore
	var partials = gulp.src([
			config.global.src + '/resources/templates/**/_*.hbs'
		])
		.pipe(plumber())
		.pipe(handlebars({
			handlebars: require('handlebars')
		}))
		.pipe(wrap(config.handlebars.partialWrap, {}, {
			imports: {
				processPartialName: function (fileName) {
					// Strip the extension and the underscore
					// Escape the output with JSON.stringify
					return JSON.stringify(path.basename(fileName, '.js').substr(1));
				}
			}
		}));

	var templates = gulp.src([
			config.global.src + '/resources/templates/**/[^_]*.hbs'
		])
		.pipe(plumber())
		.pipe(handlebars({
			handlebars: require('handlebars')
		}))
		.pipe(wrap(config.handlebars.templateWrap))
		.pipe(declare({
			namespace: config.handlebars.namespace,
			noRedeclare: config.handlebars.noRedeclare
		}));

	// Output both the partials and the templates
	return merge(partials, templates)
		.pipe(concat('handlebars.templates.js'))
		.pipe(wrap('(function (root, factory) {if (typeof module === \'object\' && module.exports) {module.exports = factory(require(\'handlebars\'));} else {factory(root.Handlebars);}}(this, function (Handlebars) { <%= contents %> }));'))
		.pipe(gulp.dest(config.global.dev + '/resources/js/'));

});

gulp.task('watch:handlebars', function () {

	watch([
		config.global.src + '/resources/templates/**/*.hbs',
		config.global.src + '/resources/js/handlebars.helper.js'
	], function () {
		runSequence('handlebars');
	});

});
