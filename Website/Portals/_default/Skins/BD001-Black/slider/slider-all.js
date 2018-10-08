$( document ).ready(function( $ ) {

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
