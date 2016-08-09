var gulp = require('gulp');
var bump = require('gulp-bump');
var git  = require('gulp-git');
var gutil = require('gulp-util');
var filter = require('gulp-filter');
var exec = require('child_process').exec;
var argv = require('yargs')
	.option('type', {
		alias: 't',
		choices: ['patch', 'minor', 'major', 'prerelease']
	}).argv;
var tag = require('gulp-tag-version');
var push = require('gulp-git-push');
var fs = require('fs');

/**
 *  Bumping and tagging version, and pushing changes to repository.
 *
 *  You can use the following commands:
 *      gulp release --type=patch   # makes: v1.0.0 → v1.0.1
 *      gulp release --type=minor   # makes: v1.0.0 → v1.1.0
 *      gulp release --type=major   # makes: v1.0.0 → v2.0.0
 *      gulp release --type=prerelease   # makes: v1.0.0 → v1.0.0-1
 *
 *  Please read http://semver.org/ to understand which type to use.
 *
 *  The 'gulp release' task is an example of a release task for a NPM package.
 **/

gulp.task('release', function() {

	var packageOld = JSON.parse(fs.readFileSync('./package.json'));

	return gulp.src(['./package.json'])
		// bump package.json
		.pipe(bump({
			type: argv.type || 'patch'
		}))
		// save the bumped files into filesystem
		.pipe(gulp.dest('./'))
		// commit the changed files
		.pipe(git.commit('VERSION TAGGED'))
		// filter one file
		.pipe(filter('package.json'))
		// create tag based on the filtered file
		.pipe(tag())
		// push changes into repository
		.pipe(push({
			repository: 'origin',
			refspec: 'HEAD'
		}));

	var packageNew = JSON.parse(fs.readFileSync('./package.json'));

	git.exec({args : 'diff ' + packageOld.version + ' ' + packageNew.version + '--> diff.diff'}, function (err, stdout) {  });
});
