$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: true,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
     navText:[
              "<i class='fa fa-angle-left fa-2x'></i>",
              "<i class='fa fa-angle-right fa-2x'></i>"
          ],
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: true,
     navText:[
              "<span class='arrow_left'></span>",
              "<span class='arrow_right'></span>"
          ],
    margin: 20,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    
    responsive:{
            0:{
                items:2
            },
            480:{
                items:2
            },
            767:{
                items:3
            },
            1000:{
                items:3
            },
           
            1400:{
                items:4
            }
        }
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});





$(function() {
   	
   	$('.service .butt').on('click',function(){
		 
    	
	   	$(this).toggleClass("active");
	   	$(this).parents(".service").find(".hotels").toggleClass("active");
	
		

	});

	// animated

	// $('.service_img.left_part').animated('bounceInLeft' , 'bounceInLeft' );
	// $('.service_img.right_part').animated('bounceInRight' , 'bounceInRight' );
	// $('.service_text h1').animated('zoomIn' , 'zoomIn' );
	
	//slider mobile
		$('.mobile_item_slider').owlCarousel({
			items:1,
		    loop:true,
		    margin:0,
		   	nav:true,
		   
		    
		    navText:[
	            "<i class='fa fa-angle-left fa-2x'></i>",
	            "<i class='fa fa-angle-right fa-2x'></i>"
	        ]
	        
		  
		});	



		//slider mobile
		$('.main_slider').owlCarousel({
		
		    loop:true,
		    margin:0,
		   	nav:false,
			items:1,
			autoplay:true,
	    	autoplayTimeout:4000
		  
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

  //open text mob

  $('.open_mob_text').on('click',function(){
    $('.open_mob_text').toggleClass('active');
      
    $(".hidden_mob_text").slideToggle();
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


function windowSize(){
  if ($(window).width() <= '992')
  {
    $('.rotate_mob_1').detach().insertAfter('.rotate_mob_2');
  } 
  else 
  {
    $('.rotate_mob_2').detach().insertAfter('.rotate_mob_1');
  }
}
$(window).load(windowSize); 
$(window).resize(windowSize);