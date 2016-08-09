/// <reference path="../../../typings/globals/jquery/index.d.ts" />

(function($: JQueryStatic, window: any, document: any) {

	/**
	 * A sample jQuery plugin written in Typescript.
	 */
	class Plugin
	{
		public static NAME: string = 'pluginName';

		private _el: Element;
		private _$el: JQuery;
		private _options: any;
		private _defaults: {
			option1: 'change this'
		};

		/**
		 * Initializes a new instance of the plugin.
		 *
		 * @param element   The DOM element.
		 * @param options   Plugin options.
		 */
		constructor(element: Element, options: any)
		{
			var self = this;

			self._el = element;
			self._$el = $(element);

			// extend default options
			self._options = $.extend({}, self._defaults, options);

			// init plugin
			self.init();
		}

		/**
		 * Initialization.
		 */
		public init() : void
		{
			var self = this;

			console.log('init typescript boilerplate plugin');

			self._$el.on('click', () => {
				console.log('clicked element');
			});
		}
	}

	$.fn[Plugin.NAME] = function(options: any) {

		return this.each(function() {
			let $this = $(this);
			if(!$this.data(Plugin.NAME)) {
				$this.data(Plugin.NAME, new Plugin(this, options));
			}
		});

	};

})(jQuery, window, document);
