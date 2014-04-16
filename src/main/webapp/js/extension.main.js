//将一个表单的数据返回成JSON对象
$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};
// {
// name : "field_1",
// value : "something"
// }
// implement JSON.stringify serialization
JSON.stringify = JSON.stringify ||
function(obj) {

	var t = typeof (obj);
	if (t != "object" || obj === null) {

		// simple data type
		if (t == "string")
			obj = '"' + obj + '"';
		return String(obj);

	} else {

		// recurse array or object
		var n, v, json = [], arr = (obj && obj.constructor == Array);

		for (n in obj) {
			v = obj[n];
			t = typeof (v);

			if (t == "string")
				v = '"' + v + '"';
			else if (t == "object" && v !== null)
				v = JSON.stringify(v);

			json.push(( arr ? "" : '"' + n + '":') + String(v));
		}

		return ( arr ? "[" : "{") + String(json) + ( arr ? "]" : "}");
	}
};
// implement JSON.parse de-serialization
JSON.parse = JSON.parse ||
function(str) {
	if (str === "")
		str = '""';
	eval("var p=" + str + ";");
	return p;
}; 