$(function() {
   


	
	$('.service_img.left_part').animated('bounceInLeft' , 'bounceInLeft' );
	$('.service_img.right_part').animated('bounceInRight' , 'bounceInRight' );
	$('.service_text h1').animated('zoomIn' , 'zoomIn' );
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});


