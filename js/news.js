$(document).ready(function () {
	const con = window.location.href.split('?')[1].split('&')[0].split('=')[1];
	const id = window.location.href.split('?')[1].split('&')[1].split('=')[1];
	console.log(con);
	Ajax(id);
	read();
	function read() {
		if (con == 1) {
			console.log('1');
			AjaxR1('公司新闻');
		} else {
			AjaxR2('行业资讯');
		}
	}
	function addCli() {
		$('.con_r .item').click(function() {
			console.log($(this).children('i').html())
			Ajax($(this).children('i').html())

		})
	}

	function Ajax(id) {
		$('.con_l').html('');
		$.ajax({
			url: 'https://t.bbmgood.com/web/demo.php?path=getDetails&parm='+id,
			type: 'default GET (Other values: POST)',
			dataType: 'jsonp',
			jsonpCallback:"callback",
		})
		.done(function(data) {
			Append(data);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}

	function AjaxR1(p) {
		console.log(p);
		$('.con_r').html('');
		console.log(p);
		$.ajax({
			url: 'https://t.bbmgood.com/web/demo.php?path=getList&parm='+p+'&page=1&limit=20',
			type: 'default GET (Other values: POST)',
			dataType: 'jsonp',
			jsonpCallback:"callback",
		})
		.done(function(data) {
			console.log('3');
			AppendR(data);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");

		});
	}

	function AjaxR2(p) {
		$('.con_r').html('');
		$.ajax({
			url: 'https://t.bbmgood.com/web/demo.php?path=getList&parm='+p+'&page=1&limit=20',
			type: 'default GET (Other values: POST)',
			dataType: 'jsonp',
			jsonpCallback:"callback",
		})
		.done(function(data) {
			AppendR(data);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}

	function AppendR(data) {
		console.log(data);
		for (var i = 0; i < data.data.length; i++) {	
			$('.con_r').append('<div class="item"><i style="display: none">'+data.data[i].id+'</i><p>'+data.data[i].article_title+'</p><span>'+data.data[i].resp_desc+'</span></div>');
		}
		addCli();
	}
	
	function Append(data) {
		$('.con_l').append(data.article_content);
	}

})
