window.onload = function() {
	//滑过事件
	$(".newTxt_t li").mouseover(function() {
	
		if ($(this).index() == 0) {
			$(".newTxt_bor").css("left","0px");
		} else if ($(this).index() == 1) {
			$(".newTxt_bor").css("left","99px");
		}
	});

	//ajax请求
	$.ajax({
		type:"get",
		//url:"https://api.douban.com/v2/book/search?q=javascript&count=1",
		url:"http://192.168.200.86:8080/platform-framework/api/topic/list",
		dataType: "jsonp",
		async: true,
		jsonp: "callback",
		success: function(res) {
			console.log(res);
			for (var i = 0; i < res.length; i ++) {
				if (res[i].topic_category_id == 1) {
					$(".donate_bar").append("<li><a href=''>"+res[i].title+"</a> </li>");
				} else if (res[i].topic_category_id == 2){
					$(".donate_bar2").append("<li><a href=''>"+res[i].title+"</a> </li>");
				}
			}
			
		}       
	});
	
	$(".newTxt_t li").mouseover(function() {
		if ($(this).index() == 0) {
			$(".donate_bar").css("display", "block");
			$(".donate_bar2").css("display", "none");
		} else{
			$(".donate_bar").css("display", "none");
			$(".donate_bar2").css("display", "block");
		}
	})
	
	$(".nav_bar_li").hover(function() {
		$(".bar_li_div").css("display","block");
	},function() {
		$(".bar_li_div").css("display","none");
	})

}
