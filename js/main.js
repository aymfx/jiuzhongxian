
require.config({
	  paths:{
	  	"jquery":"jquery-1.11.1.min"
	  }
})
//注册验证
require(["jquery","register"],function($,fn1){
	var flag1=flag2=flag3=flag4=false;
	//获取手机验证
	var phone="";
	$(".regist input").on('change',function(){
		var str=$(".regist input").val().trim();
		if(str!=""){
			if(fn1.shouji(str)){
				$("#tishi1")[0].innerHTML="格式正确";
				$("#tishi1").animate({"opacity":1},500,function(){
					$("#tishi1").animate({opacity:0},500);
				})
				flag1=true;
				phone=str;
			}else{
				$("#tishi1")[0].innerHTML="格式错误";
				$("#tishi1").animate({"opacity":1},500,function(){
					$("#tishi1").animate({opacity:0},500);
				})
				flag1=false;
			}
		}else{
			$("#tishi1")[0].innerHTML="手机号不能为空";
				$("#tishi1").animate({"opacity":1},500,function(){
					$("#tishi1").animate({opacity:0},500);
			})
				flag1=fasle;
			
		}
	})
	//判断验证码
	function getRandom(){
			  	   return Math.ceil(Math.random()*(9999-1000)+1000);
	   }
	var str1=""
	$(".regist2 input").on("focus",function(){
			$("#yanzhengma")[0].innerHTML=getRandom();
			str1=$("#yanzhengma")[0].innerHTML;
	})
	
	$(".regist2 input").on("change",function(){
			var str=$(".regist2 input").val();
			if(str1!=str){
				$("#tishi1")[0].innerHTML="验证码不正确";
				$("#tishi1").animate({"opacity":1},500,function(){
					$("#tishi1").animate({opacity:0},500);
					flag2=fasle;
			})
			}else{
				flag2=true;
			}
	})
	//判断邮箱
	var mail="";
	$(".regist3 input").on('blur',function(){
		var str=$(".regist3 input").val().trim();
		if(str!=""){
			if(fn1.youxiang(str)){
				$("#tishi1")[0].innerHTML="格式正确";
				$("#tishi1").animate({"opacity":1},500,function(){
					$("#tishi1").animate({opacity:0},500);
				})
				flag3=true;
				mail=str;
			}else{
				$("#tishi1")[0].innerHTML="格式错误";
				$("#tishi1").animate({"opacity":1},500,function(){
					$("#tishi1").animate({opacity:0},500);
				})
				flag3=false;
			}
		}else{
			$("#tishi1")[0].innerHTML="邮箱不能为空";
				$("#tishi1").animate({"opacity":1},500,function(){
					$("#tishi1").animate({opacity:0},500);
			})
				flag3=false;
		}
	})
	
	//设置密码
		var pass="";
		$(".regist4 input").on('change',function(){
			var str=$(".regist4 input").val();
			var num=fn1.mima(str);
			pass=str;
			switch (num) {
                        case 1:
                        	$("#tishi1")[0].innerHTML = "密码强度为低";
             	$("#tishi1").animate({ "opacity": 1 }, 500, function() {
             		$("#tishi1").animate({ opacity: 0 }, 500);
             	})
                            break;
                        case 2:
                  	$("#tishi1")[0].innerHTML = "密码强度为中";
             	$("#tishi1").animate({ "opacity": 1 }, 500, function() {
             		$("#tishi1").animate({ opacity: 0 }, 500);
             	})
                            break;
                        case 3:
                  	$("#tishi1")[0].innerHTML = "密码强度为高";
             	$("#tishi1").animate({ "opacity": 1 }, 500, function() {
             		$("#tishi1").animate({ opacity: 0 }, 500);
             	})
                            break;
                }
			
		});

	//判断正确
	$(".regist5 input").on('change',function(){
		  var str=$(".regist5 input").val();
		  console.log(str+"："+pass);
		  if(pass!=str){
		  	$("#tishi1")[0].innerHTML="两次密码不对";
				$("#tishi1").animate({"opacity":1},500,function(){
					$("#tishi1").animate({opacity:0},500);
			})
				flag4=false;
		  }else{
		  	$("#tishi1")[0].innerHTML="密码正确";
				$("#tishi1").animate({"opacity":1},500,function(){
					$("#tishi1").animate({opacity:0},500);
			})
		  	 flag4=true;
		  	 
		  }
	})
	
	//判断是否勾选
	$(".regist7 input").on('click',function(){
		var check=".regist6 input";
		check=fn1.agreeinfo(check);
		  if(check){
		  	  if(flag1 && flag2 && flag3 && flag4 ){
		  	  	console.log(flag1+":"+flag2+":"+flag3+":"+flag4);
		  	  	    var str="password="+pass+"&email="+mail+"&iphone="+phone;
		  	  	    fn1.ajax1(str);
		  	  	    
		  	  }else{
		  	  	$("#tishi1")[0].innerHTML="请补充完整";
				$("#tishi1").animate({"opacity":1},500,function(){
					$("#tishi1").animate({opacity:0},500);
			})
		  	  }
		  }else{
		  	$("#tishi1")[0].innerHTML="请同意条款";
				$("#tishi1").animate({"opacity":1},500,function(){
					$("#tishi1").animate({opacity:0},500);
			})
		  }
	})
	
		
	
	
	
})

		
