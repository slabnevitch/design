$(function() {

	
	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			navText: [],
			responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:false,
		            stagePadding: 0
		        },
		        480: {
		        	stagePadding: 60
		        },
		        600:{
		        	nav:true,
		        	stagePadding: 60
		        },
		        960:{
		        	stagePadding: 60
		        },
		        961:{
		            items:3,
		            nav:true
		        },
		       
		    }
		});
	
		var $menu = $("#my-menu").mmenu({
			extensions: [ 'theme-dark', 'effect-menu-slide', 'pagedim-black'],
			navbar: {
				title: "Меню"
			},
        "pageScroll": true, //работает, если и меню и секции, к которым работает скролл, находятся в одом и том же контейнере
        //columns: true,
        offCanvas: {
        	position: "right"
        }
    });


	});
	//SVG Fallback
	
	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
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

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
