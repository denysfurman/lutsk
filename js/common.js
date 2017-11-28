
// loader
	$(document).ready(function() {
	  setTimeout(function() {
	    $('body').addClass('loaded');
	    
	  }, 1000);


	});

$(function() {
   	
   	

	// animated

	$('.service_img.left_part').animated('bounceInLeft' , 'bounceInLeft' );
	$('.service_img.right_part').animated('bounceInRight' , 'bounceInRight' );
	$('.service_text h1').animated('zoomIn' , 'zoomIn' );
	
	//slider mobile
		$('.mobile_item_slider').owlCarousel({
		
		    loop:true,
		    margin:0,
		   	nav:true,
		   
		    
		    navText:[
	            "<i class='fa fa-angle-left fa-2x'></i>",
	            "<i class='fa fa-angle-right fa-2x'></i>"
	        ],
	        items:1
		  
		});	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//togle button

	$('.menu-toggle').on('click',function(){
		$('.menu-toggle').toggleClass('active');
			
		$(".heade_mob_menu").slideToggle();
	});

	

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


