(function ($, window, document, undefined) {
	'use strict';

	$(document).ready(function () {

		// offcanvas click events
		$('[data-offcanvas-show]').on('click', function (e) {
			e.preventDefault();
			$(this).closest('.offcanvas').toggleClass('offcanvas--show-' + $(this).data('offcanvas-show'));
		});

		$('.offcanvas__exit').on('click', function () {
			$(this).closest('.offcanvas').removeClass('offcanvas--show-left offcanvas--show-right');
			$('[data-offcanvas-show]').removeClass('is-active');
		});

		// hamburger toggle
		$('.hamburger').on('click', function () {
			$(this).toggleClass('is-active');
		});

		// event listener for conditional resource loader
		$(window).on('resourcesReady', function() {
			//initialize components
			$('[data-init]').each(function() {
				var init = eval($(this).attr('data-init'));
				init($(this));
			});
		});

		// conditional resource loader
		resourceLoader({
			base: 'resources/'
			// resources: optionalArrayOfResources
		});

	});

	// $(window).load(function() {});

})(jQuery, window, document);
