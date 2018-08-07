
window.onload = function() {
	//滑过事件
	$(".newTxt_t li").mouseover(function() {
	
		if ($(this).index() == 0) {
			$(".newTxt_bor").css("left","0px");
		} else if ($(this).index() == 1) {
			$(".newTxt_bor").css("left","99px");
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
	 Ajax();
 	function Ajax() {


		$.ajax({
			url: 'https://t.bbmgood.com/web/demo.php?path=getList&parm=公司新闻&page=1&limit=20',
			type: 'get',
			dataType: 'jsonp',
			jsonp: "callback",
			jsonpCallback:"callback",
		})	
		.done(function(data) {

			for (var i = 0; i < data.data.length; i++) {
				$('.donate_bar').append('<li><i style="display: none;">'+data.data[i].id+'</i>'+data.data[i].article_title+'</li>');
			}
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
			$('.donate_bar li').click(function() {
				location.href = 'html/news.html?con=1&id='+$(this).children('i').html();
			});
		});


		setTimeout(function() {

	 		$.ajax({
				url: 'https://t.bbmgood.com/web/demo.php?path=getList&parm=行业资讯&page=1&limit=20',
				type: 'get',
				dataType: 'jsonp',
				jsonp: "callback",
				jsonpCallback:"callback",
			})
			.done(function(data) {

				for (var i = 0; i < data.data.length; i++) {
					$('.donate_bar2').append('<li><i style="display: none;">'+data.data[i].id+'</i>'+data.data[i].article_title+'</li>');
				}
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
				$('.donate_bar li').click(function() {
					location.href = 'html/news.html?con=2&id='+$(this).children('i').html();
				});
			});
		},300)
		
	}

}
