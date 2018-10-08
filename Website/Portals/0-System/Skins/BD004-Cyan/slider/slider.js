jQuery(document).ready(function($) {
// bxslider //
$(".bxslider").bxSlider({
	auto: true,
	pager:false,
});  

$(".Testimonial").bxSlider({
	auto: false,
	pager:true,
});  



$('.bx-example1').bxSlider({
  slideWidth: 255,
    minSlides: 2,
    maxSlides: 3,
    moveSlides: 2,
    slideMargin: 10
});
		
								
$('#carousel1').carouFredSel({
					responsive: true,
					auto: false,
					prev: '#prev1',
					next: '#next1',
					scroll: 1,
					swipe: {
						onMouse: true,
						onTouch: true
					},
					items: {
						width: 400,
						height:'100%',
					//	height: '30%',	//	optionally resize item-height
						visible: {
							min: 1,
							max: 6
						}
					}
});

// Slideshow 1
      $("#example1").responsiveSlides({
        auto: true,
        nav: true,
        speed: 500,
        namespace: "callbacks",
      });


// Slideshow 2
$( '#example2' ).sliderPro({
			width: 1140,
			height: 550,
			arrows: true,
			buttons: false,
			waitForLayers: true,
			thumbnailWidth: 200,
			thumbnailHeight: 100,
			thumbnailPointer: true,
			autoplay: false,
			autoScaleLayers: false,
			breakpoints: {
				500: {
					thumbnailWidth: 120,
					thumbnailHeight: 50
				}
			}
		});
// Slideshow 3
$( '#example3' ).sliderPro({
			width: '50%',
			height: 500,
			aspectRatio: 1.5,
			visibleSize: '100%',
			forceSize: 'fullWidth'
		});

		// instantiate fancybox when a link is clicked
		$( '#example3 .sp-image' ).parent( 'a' ).on( 'click', function( event ) {
			event.preventDefault();

			// check if the clicked link is also used in swiping the slider
			// by checking if the link has the 'sp-swiping' class attached.
			// if the slider is not being swiped, open the lightbox programmatically,
			// at the correct index
			if ( $( '#example3' ).hasClass( 'sp-swiping' ) === false ) {
				$.fancybox.open( $( '#example3 .sp-image' ).parent( 'a' ), { index: $( this ).parents( '.sp-slide' ).index() } );
			}
		});

});