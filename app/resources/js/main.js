(function ($, window, document, undefined) {
	'use strict';

    $(document).ready(function () {

        // offcanvas click events
        $('[data-offcanvas-show]').on('click', function(e){
            e.preventDefault();
            $(this).closest('.offcanvas').toggleClass('offcanvas--show-'+$(this).data('offcanvas-show'));
        });

        $('.offcanvas__exit').on('click', function(){
            $(this).closest('.offcanvas').removeClass('offcanvas--show-left offcanvas--show-right');
            $('[data-offcanvas-show]').removeClass('is-active');
        });

        // hamburger toggle
        $('.hamburger').on('click', function(){
            $(this).toggleClass('is-active');
        });

    });

    // $(window).load(function() {});

})(jQuery, window, document);
