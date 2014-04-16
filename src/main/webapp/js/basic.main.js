$(function() {
	$.getJSON("data/tmp.json", function(json) {
		$('#js-template-example').append(tmpl("tmpl-demo", json));
	});
	//跨越域访问
	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	$.getJSON(flickerAPI, {
		tags : "mount rainier",
		tagmode : "any",
		format : "json"
	}).done(function(data) {
		$.each(data.items, function(i, item) {
			$("<img>").attr("src", item.media.m).appendTo("#images");
			if (i === 3) {
				return false;
			}
		});
	});

	$("#loadbtn").click(function() {
		$('#loadheader').load('data/load.txt');
	});
	$("#postbtn").click(function() {
		$.ajax({
			url : "http://www.w3school.com.cn/example/jquery/demo_test_post.asp",
			dataType : "jsonp",
			data : {
				name : "Donald Duck",
				city : "Duckburg"
			},
			success : function(data, status) {
				alert("Data: " + data + "\nStatus: " + status);
			}
		});
	});

});
