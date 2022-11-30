$(function () {
	$(window).scroll(function() {
	    $('.ws').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+1000) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
	$(window).scroll(function() {
		    $('.wish').each(function(){
		        var imagePos = $(this).offset().top;

		        var topOfWindow = $(window).scrollTop();
		        if (imagePos < topOfWindow+1000) {
		            $(this).addClass("fadeInLeft");
		        }
		    });
		});
	$(window).scroll(function() {
		    $('.title_forma').each(function(){
		        var imagePos = $(this).offset().top;

		        var topOfWindow = $(window).scrollTop();
		        if (imagePos < topOfWindow+1000) {
		            $(this).addClass("fadeInRight");
		        }
		    });
		});
	$(window).scroll(function() {
		    $('.form').each(function(){
		        var imagePos = $(this).offset().top;

		        var topOfWindow = $(window).scrollTop();
		        if (imagePos < topOfWindow+1000) {
		            $(this).addClass("fadeInUp");
		        }
		    });
		});
	})
