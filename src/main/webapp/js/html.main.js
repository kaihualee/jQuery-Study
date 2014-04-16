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
			var array = $(this).serializeArray();
			var data = $(this).serialize();
			//转换成json格式的字符串，只序列化有name字段的值,checkbox只有在checked状态才序列化
			var json = $(this).serializeObject();
			console.log(json.phone);
			console.log(array[1].name);
			console.log(array[1].value);
		}

	});
});
