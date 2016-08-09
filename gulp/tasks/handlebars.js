var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var mergeStream = require('merge-stream');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var config = require('./../config');

gulp.task('handlebars', function () {

	if (config.global.tasks.handlebars) {
		// Assume all partials start with an underscore

		var partials = mergeStream(config.global.resources.map( function(currentResource) {
			return gulp.src([
				config.global.src + currentResource + '/templates/**/_*.hbs'
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
		}));

		var templates =  mergeStream(config.global.resources.map( function(currentResource) {
			return gulp.src([
				config.global.src + currentResource + '/templates/**/[^_]*.hbs'
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
		}));

		// Output both the partials and the templates
		return mergeStream(partials, templates)
			.pipe(concat('handlebars.templates.js'))
			.pipe(wrap('(function (root, factory) {if (typeof module === \'object\' && module.exports) {module.exports = factory(require(\'handlebars\'));} else {factory(root.Handlebars);}}(this, function (Handlebars) { <%= contents %> }));'))
			.pipe(gulp.dest(config.global.dev + config.global.resources[0] + '/js/'));
	} else {
		gutil.log(gutil.colors.yellow('handlebars disabled'));
	}

});

gulp.task('watch:handlebars', function () {

	if (config.global.tasks.handlebars) {
		config.global.resources.forEach(function (currentResource) {
			watch([
				config.global.src + currentResource + '/templates/**/*.hbs',
				config.global.src + currentResource + '/js/handlebars.helper.js'
			], function () {
				runSequence('handlebars');
			});
		});
	} else {
		gutil.log(gutil.colors.yellow('handlebars disabled'));
	}

});
