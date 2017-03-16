define(["jquery"], function($) {

	function Login() {

	}

	//运行ajax，获取数据库所有用户名和密码
	Login.prototype.ajax1 = function(str) {

		$.ajax({
			type: "post",
			url: "../php/login.php",
			async: true,
			data: str,
			success: function(data) {
				alert(data);

			},
			error: function() {
				alert("登录失败");
			}
		})
	}

	return new Login();

})