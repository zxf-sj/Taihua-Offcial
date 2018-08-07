$(document).ready(function () {

	News(1);
	$(".tcdPageCode").createPage({
	        pageCount:6,
	        current:1,
	        backFn:function(p){
	        	console.log(p);
	            News(p);
	             setTimeout(function() {
	             	Information(p);
	             },300) 
	        }
	});


	function News(p) {
		$.ajax({
			url: 'https://t.bbmgood.com/web/demo.php?path=getList&parm=公司新闻&page='+p+'&limit=3',
			type: 'default GET (Other values: POST)',
			dataType: 'jsonp',
			jsonpCallback:"callback",
		})
		.done(function(data) {
			AppendN(data);
			
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log('complete');
			
		});
	}

	function Information(p) {
		$.ajax({
			url: 'https://t.bbmgood.com/web/demo.php?path=getList&parm=行业资讯&page='+p+'&limit=3',
			type: 'default GET (Other values: POST)',
			dataType: 'jsonp',
			jsonpCallback:"callback",
		})
		.done(function(data) {
			AppendI(data);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log('complete');
		});
	}

	function AppendN(data) {
		$('.con_text1').html("");
		console.log(data.data)
		for (var i = data.data.length - 1; i >= 0; i--) {
			$('.con_text1').append('<div class="news">'+
							'<div class="news_l">'+
								'<img src='+data.data[i].resp_img+' alt="">'+
							'</div>'+
							'<div class="news_r">'+
								'<p class="news_tit">'+
									data.data[i].article_title+
								'</p>'+
								'<p class="news_txt">'+
									data.data[i].resp_desc+					
								'</p>'+
								'<p class="news_time">'+
									data.data[i].article_date_v+
								'</p>'+
								'<span class="loca" >'+
									'<i style="display: none;">'+data.data[i].id+'</i>查看更多>'+ 
								'</span>'+
							'</div>'+
						'</div>')
		}
		LocaN();
	}

	function AppendI(data) {
		$('.con_text2').html("");
		for (var i = data.data.length - 1; i >= 0; i--) {
			$('.con_text2').append('<div class="news">'+
							'<div class="news_l">'+
								'<img src='+data.data[i].resp_img+' alt="">'+
							'</div>'+
							'<div class="news_r">'+
								'<p class="news_tit">'+
									data.data[i].article_title+
								'</p>'+
								'<p class="news_txt">'+
									data.data[i].resp_desc+					
								'</p>'+
								'<p class="news_time">'+
									data.data[i].article_date_v+
								'</p>'+
								'<span class="loca">'+
									'<i style="display: none;">'+data.data[i].id+'</i>查看更多>'+
								'</span>'+
							'</div>'+
						'</div>')
		}
		LocaI();
	}


	$(".con_title p").click(function() {
		if ($(this).index() == 0) {
			$('.con_text1').html("");
			News(1);
			$(".con_text1").css("display","block");
			$(".content .con_title .con_p1").addClass("star")
			$(".content .con_title .con_p2").removeClass("star")
			$(".con_text2").css("display","none");
		} else {
			$('.con_text2').html("");
			Information(1);
			$(".content .con_title .con_p1").removeClass("star")
			$(".content .con_title .con_p2").addClass("star")
			$(".con_text1").css("display","none");
			$(".con_text2").css("display","block");
		}
	})

	function LocaN() {
		$('.con_text1 .loca').click(function() {
			var id = $(this).children('i').html();
			location.href = './news.html?con=1&id='+id
			console.log($(this).index());
		})
	}

	function LocaI() {
		$('.con_text2 .loca').click(function() {
			var id = $(this).children('i').html();
			location.href = './news.html?con=2&id='+id
			console.log($(this).index());
		})
	}
});


