$(function(){
	'use strict';
   
    
	// Trigger MixItUp
	$('#container').mixItUp();
   
 	//Adjust Shuffle links
	$('.shuffle li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
    
    // set navabr 
    $(window).scroll(function(){
        if( $(this).scrollTop() ==0){
            $('.navbar-default').css('background-color','rgba(3,3,3,0.5)');
        }
        if( $(this).scrollTop() <=200){
            $('.navbar-default').css('background-color','rgba(3,3,3,0.5)');
        }
        else{
            $('.navbar-default').css('background-color','rgba(3,3,3,0.9)');
        }
        
    });
    
  
   
	// owl Carousel
	$('.owl-carousel').owlCarousel({
		autoplay : false,
		loop : true,
		margin : 10,
		responsive : {
			0 : {items : 2},
			600 : {items : 3},
			1000 : {items : 4}
		}
	});
    
    //video
     $('.index-ved .carousel-caption .icon').on("click",function(){
         
         $('.index-ved .video-cont').show();
         $('.index-ved .video-cont i').show();
         $('.index-ved .video-cont video').play();
        
     });
    $('.index-ved .video-cont i').on("click",function(){
         
        $('.index-ved .video-cont').hide();
         $('.index-ved .video-cont video').trigger('pause');       
     });
    
  
    
  
    
});

//loading screen
$(window).load(function () {
	'use strict';
	$('.loading-overlay .cir').fadeOut(2000, function () {
		$('body').css("overflow", 'auto');
		$(this).parent().fadeOut(2000);
	});
});
