/**
 * Conditionally loading of some Libraries which are only needed in some rare cases and are else to big to concat with
 * all the other files. Given the testMap, this function checks the property "test" of each object and, if it
 * resolves to "true", adds the scripts of the array to a loading-que. Then it asynchronously loads all those scripts
 * BEFORE loading the main.js-File.
 *
 * NOTE: If a Script fails to load, execution is not stopped and main file will load anyways.
 *
 * User: david.losert
 * Date: 30.12.2014
 * Time: 10:45
 */

(function () {
	'use strict';

	/*jshint -W020 */
	global = global || {};
	global.conditionalLoader = {
		conditionsAllArray: [],
		add: function (conditionsArray) {
			this.conditionsAllArray = this.conditionsAllArray.concat(conditionsArray);
		},
		getScriptsToLoadFrom: function (testMap) {
			var scriptsToLoad = [];
			jQuery.each(testMap, function (index, testObject) {
				if ((typeof(testObject.test) === 'function' ? testObject.test() : testObject.test) && testObject.scripts) {
					scriptsToLoad.push(testObject);
				}
			});
			return scriptsToLoad;
		},
		getStylesToLoadFrom: function (testMap) {
			var stylesToLoad = [];
			// var isIE8 = jQuery('.lt-ie9').length > 0 ? true : false;

			jQuery.each(testMap, function (index, testObject) {
				//var ie8styles = [];

				if (testObject.test && testObject.styles) {
					jQuery.merge(stylesToLoad, testObject.styles);
				}
			});

			return stylesToLoad;
		},
		loadScripts: function (scripts, callback) {
			var completedScripts = 0;

			if (scripts.length === 0) {
				callback();
			}

			jQuery.each(scripts, function (i, scriptObject) {
				var requests = [];
				jQuery.each(scriptObject.scripts, function (j, scriptUrl) {
					requests.push(jQuery.ajax({
						url: global.configuration.data.staticResourcesBase + scriptUrl,
						dataType: 'script',
						cache: true
					}));
				});

				jQuery.when.apply(jQuery, requests)
					.done(function () {
						if (typeof(scriptObject.scriptsDone) === 'function') {
							scriptObject.scriptsDone();
						}
						successCallback();
					})
					.fail(function () {
						if (typeof(scriptObject.scriptsFail) === 'function') {
							scriptObject.scriptsFail();
						}
						errorCallback(scriptObject);
					});
			});

			function successCallback() {
				completedScripts++;
				checkIfComplete();
			}

			function errorCallback(scriptObject) {
				completedScripts++;
				console.log('Error while loading: ' + scriptObject.scripts.join());
				checkIfComplete();
			}

			function checkIfComplete() {
				if (completedScripts === scripts.length) {
					callback();
				}
			}
		},
		loadStyles: function (styles) {
			if (styles.length > 0) {
				jQuery.each(styles, function (index, styleUrl) {
					jQuery('<link/>', {
						rel: 'stylesheet',
						type: 'text/css',
						href: global.configuration.data.staticResourcesBase + styleUrl
					}).appendTo('head');
				});
			}
		},
		loadMainJS: function () {
			jQuery.ajax(
				{
					url: global.configuration.data.staticResourcesBase + 'js/main.js',
					dataType: 'script',
					cache: true
				})
				.fail(function (jqxhr, settings, error) {
					console.log('[' + jqxhr.status + '] - Error while loading main File: ', error);
				});
		},
		exec: function () {
			var stylesToLoad = this.getStylesToLoadFrom(this.conditionsAllArray);
			var scriptsToLoad = this.getScriptsToLoadFrom(this.conditionsAllArray);
			this.loadStyles(stylesToLoad);
			this.loadScripts(scriptsToLoad, this.loadMainJS);
		}
	};
})();
