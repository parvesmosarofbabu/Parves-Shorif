jQuery(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		$("#owl-csel1").owlCarousel({
					items: 4,
					autoplay: true,
					autoplaySpeed: 2000,
					autoplayTimeout: 3000,
					startPosition: 0,
					ltr: true,
					loop: true,
					dots: true,
					nav: true,
					navText: [
								'<i class="fa fa-angle-left" aria-hidden="true"></i>',
								'<i class="fa fa-angle-right" aria-hidden="true"></i>'
							],
					navContainer: '.main-content .custom-nav',
					responsive:{
						0: {
							items: 1,						
						},
						767: {
							items: 1,						
						},
						1200: {
							items: 1,						
						}
					}

				});

		jQuery(".counter").counterUp({
			delay: 10,
			time: 1000,
		});


		$("#owl-csel2").owlCarousel({
					items: 4,
					autoplay: true,
					autoplayTimeout: 3000,
					autoplaySpeed: 2000,
					startPosition: 0,
					ltr: true,
					loop: true,
					margin: 70,
					dots: true,
					nav: true,
					navText: [
								'<i class="fa fa-angle-left" aria-hidden="true"></i>',
								'<i class="fa fa-angle-right" aria-hidden="true"></i>'
							],
					navContainer: '.main-content2 .custom-nav',
					responsive:{
						0: {
							items: 1,						
						},
						767: {
							items: 1,						
						},
						992: {
							items: 2,						
						}
					}

				});

		
});
