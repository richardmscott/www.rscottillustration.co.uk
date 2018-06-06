$(document).ready(function() {

		// Menu Bar

		var menuToggle = $('#js-mobile-menu').unbind();

		menuToggle.on('click', function(e) {
			e.preventDefault();
			$('#js-navigation-menu').slideToggle(function() {
				$('#js-mobile-menu').toggleClass('active');
				if ($('#js-navigation-menu').is(':hidden')) {
					$('#js-navigation-menu').removeAttr('style');
				}
			});
		});

		// Search Bar
		$('.search-tools').removeClass("show");
		$('#js-search-toggle').attr({
			href: "javascript:void(0)"
		});
		$('#js-search-toggle').addClass("show");
		$('#js-search-toggle').click(function() {
			$(".search-tools").toggle();
			$('#js-search-toggle').toggleClass('active');
		});

//Initialise google form

		// Validate Forms

		$("#contact-form").validate({
				rules: {
					email: "required",
					_subject: "required",
					message: "required",
				},
				messages: {
					email: "I will need your email address to contact you.",
					_subject: "I will need your name to contact you",
					message: "Please include a message!",
				},
				submitHandler: function(form) {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                      event: 'contactform',
                      formId: 'contact-form'
                    });
					form.submit();
				}
		});
});

(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') {
        defaults.selector = options;
      }

      options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };
})(jQuery);

// Initialise swipebox

$( '.swipebox' ).swipebox({
	useSVG : false,
});

// Initialise masonry

var $griditems = $('.grid-item');
$griditems.hide();

var $grid = $('.grid').imagesLoaded( function() {
	$griditems.fadeIn();
  // init Masonry after all images have loaded
  $grid.masonry({
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
  });
});

jQuery(function(){  
  jQuery.mark.jump();
});