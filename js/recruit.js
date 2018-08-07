$(document).ready(function(){
	
	$(".content").mouseover(function() {
		$(this).css("boxShadow","0px 0px  10px 5px #ebebeb");
	})

	$(".content").mouseleave(function() {
		$(this).css("boxShadow","0px 0px  0px 0px #ebebeb");
	
	})
	$(window).scroll(function(e) {
		console.log($(".text").offset().top-$(window).scrollTop())
		if ($(".text").offset().top-$(window).scrollTop() < 900) {
			$(".text").css("left","0")
		} else{
			$(".text").css("left","-3000px")
		}
		
	})
});



