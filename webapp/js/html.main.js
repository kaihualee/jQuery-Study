$(function() {

	$('#form').submit(function(event) {
		//阻止默认的form表单提交响应时间
		event.preventDefault();
		var inputtedPhoneNumber = $("#phone").val();
		// match only numbers
		var phoneNumberRegex = /^\d*$/;
		// if the phone number doesn't match the regex
		if (!phoneNumberRegex.test(inputtedPhoneNumber)) {
			// usually show some kind of error message here
			// prevent the form from submitting
			$('#phone').focus();
			return false;
		} else {
			// run $.ajax here
			//var array = $(this).serializeArray();
			// console.log(array[1].name);
			// console.log(array[1].value);
			//var data = $(this).serialize();
			//转换成json格式的字符串，只序列化有name字段的值,checkbox只有在checked状态才序列化
			var formdata = $(this).serializeObject();
			var jsoninfo = JSON.stringify(formdata);
			console.log(jsoninfo);
			console.log(formdata.phone);
			// Using the core $.ajax() method
			$.ajax({
				// the URL for the request
				url : "post.php",
				// the data to send (will be converted to a query string)
				data : jsoninfo,
				// whether this is a POST or GET request
				type : "POST",
				// the type of data we expect back
				dataType : "json",
				contentType: "application/json",
				// code to run if the request succeeds;
				// the response is passed to the function
				success : function(json) {
					$("<h1/>").text(json.title).appendTo("body");
					$("<div class=\"content\"/>").html(json.html).appendTo("body");
				},
				// code to run if the request fails; the raw request and
				// status codes are passed to the function
				error : function(xhr, status, errorThrown) {
					alert("Sorry, there was a problem!");
					console.log("Error: " + errorThrown);
					console.log("Status: " + status);
					console.dir(xhr);
				},
				// code to run regardless of success or failure
				complete : function(xhr, status) {
					alert("The request is complete!");
				}
			});
		}

	});

});
