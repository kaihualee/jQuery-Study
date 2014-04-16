$(function() {
	//blueimp javascript-template dynamic generate html content
	$.getJSON("data/tmp.json", function(json) {
		$('#js-template-example').append(tmpl("tmpl-demo", json));
	});
	//跨越域访问 getJSON对ajax的封装
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

	//dynamic load html content
	$("#loadbtn").click(function() {
		$('#loadheader').load('data/load.txt');
	});
	
	//ajax cross domain request using jsonp but required server configuration
	//post() is really just a convenient way to call the ajax() method with a simplified, and limited, interface.
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
