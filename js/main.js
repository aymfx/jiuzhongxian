//引入jquery
require.config({
	  paths:{
	  	"jquery":"jquery-1.11.1.min"
	  }
})
//主页面
require(["jquery","index"],function($,fn1){
	
				//初始化页面
				fn1.init()

				//轮播图--banner部分
			  var $btn=$(".smallUl li");
			  var  $img=$(".banner_bg li");
			  var num=7;
			  fn1.lunbo($img,$btn,num);
			  
			  
			  //tab切换图--整箱hot
			  var $btn1=$('.indexTabNav li');
			  var $tab=$('.indexTabConWrap');
			  fn1.tab($btn1,$tab);
			  
			  //侧边切换
			  
				var $btn1=$('.indexTabNewNav li');
			  var $tab=$('.indexTabNewCon div');
			  fn1.subtab($btn1,$tab);
			  
			  //侧边栏效果切换(滑动)
			  var $btn1=$('.indexTuanList .bigUl');
			  var $tab=$('.btnBg em');
			  var num=0;
			  fn1.subSlideTab($btn1,$tab,num);
			  
			  //侧边栏效果切换(滑动)
			  var $btn1=$('.indexAdFocusWrap');
			  var num=-268;
			  var $tab=$('.btnBg2 em');
			  fn1.subSlideTab($btn1,$tab,num);
			  
			  //获取cheap数据
			  var $box=$('.receBoxs');
			  fn1.cheap($box);
			  
			  //cheap切换
			  var $btn=$(".rightNavBox span");
			  var $cheap=$('.receBoxs');
			  var $left=$('.raceLeft');
			  var $right=$('.raceRight');
			  fn1.cheaptab($btn,$cheap,$left,$right);
			  
			  
			  
			  
			  //recommend的切换
			 	var  $btn=$('.titieBox li');
			 	var  $titleSlider=$('.titleSlider')
			 	var  $btnlr=$('.optionsID');
			  var $logoAll=$('.logoAll');
			  var $btnImg=$('.logoFirstbd');
			  fn1.recommend($btn,$titleSlider,$btnlr,$logoAll,$btnImg);
			  
			  //floor1
			  
			  //第一部分
			  var $bigUl=$('#tab1 .bigUl');
			  var $btn=$('#t1 .btnBg em');
			  var $num1=1;
			  fn1.floorTab($bigUl,$btn,$num1);
			  
			  //第二部分取数据
			  var $imgs=$('#f1 .spiritList ');
			  var table='bjg'
			  fn1.floorImgs($imgs,table);
			  
			  //取数据第三部分
			  //第一步请求数据..控制数据
			  var $list1=$('#b1');
			  var table='f1';
			  var $imgss=$('#b1');
			   var $bt=$('#s1 a');
			  fn1.bottomImgs($list1,table,$imgss,$bt,4);
			 
			  
			  
			  
			  //floor2
			  
			  //第一部分
			  var $bigUl=$('#tab2 .bigUl');
			  var $btn=$('#t2 .btnBg em');
			  var $num2=2;
			  fn1.floorTab($bigUl,$btn,$num2);
			  
			  //第二部分取数据
			  var $imgs=$('#f2 .spiritList1 ');
			  var table='ptjg'
			  fn1.floorImgs($imgs,table);
			  
			  //取数据第三部分
			  
			  var $list1=$('#b2');
			  var table='f2';
			  var $imgss=$('#b2');
			   var $bt=$('#s2 a');
			  fn1.bottomImgs($list1,table,$imgss,$bt,5);
			  
			  
			  
			  
			  
			  
			  //floor3
			  
			  //第一部分
			  var $bigUl=$('#tab3 .bigUl');
			  var $btn=$('#t3 .btnBg em');
			  var $num3=2;
			  fn1.floorTab($bigUl,$btn,$num2);
			  
			  //第二部分取数据
			  var $imgs=$('#f3 .spiritList3 ');
			  var table='yjg'
			  fn1.floorImgs($imgs,table);
			  
			  //floor4
			  
			  //第一部分
			  var $bigUl=$('#tab4 .bigUl');
			  var $btn=$('#t4 .btnBg em');
			  var $num4=2;
			  fn1.floorTab($bigUl,$btn,$num4);
			  
			  //第二部分取数据
			  var $imgs=$('#f4 .spiritList4 ');
			  var table='pjg'
			  fn1.floorImgs($imgs,table);
			  
			  //floor5
			  
			  //第一部分
			  var $bigUl=$('#tab5 .bigUl');
			  var $btn=$('#t5 .btnBg em');
			  var $num5=2;
			  fn1.floorTab($bigUl,$btn,$num5);
			  //第二部分取数据
			  var $imgs=$('#f5 .spiritList5 ');
			  var table='food';
			  fn1.floorImgs($imgs,table);
			  
			  
			  //侧边回到顶部
			  $top=$('.gotoTop i');
			  fn1.scroll($top);
			  
			  //楼层
			  var $louti=$('.louti');
			  
			  var $fixDiv=$('.fixDiv div');
			  fn1.louti($louti,$fixDiv);
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			
		    
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




//登录界面完成
require(['jquery','login'],function($,fn1){
	var flag=false;
	//判断验证码
	function getRandom(){
			  	   return Math.ceil(Math.random()*(9999-1000)+1000);
	   }
	var str1=""
	$(".login3 input").on("focus",function(){
			$("#yzm")[0].innerHTML=getRandom();
			str1=$("#yzm")[0].innerHTML;
	})
	
	$(".login3 input").on("change",function(){
			var str=$(".login3 input").val();
			if(str1!=str){
				   alert("验证码不正确");
			}else{
				flag=true;
			}
	})
		//判断是否选择记住密码
		
		function addCookie(key, value, day) {
        var date = new Date(); //创建日期对象
        date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
        document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
    }

    function getCookie(key) {
        var str = decodeURI(document.cookie);
        var arr = str.split('; '); //["name=尼古拉斯赵四", "work=亚洲舞王", "age=18"]
        for (var i = 0; i < arr.length; i++) {
            var arr1 = arr[i].split('='); //1.[name,尼古拉斯赵四]  2.[work,亚洲舞王]  3.[age,18]
            if (arr1[0] == key) { //比较传入的key是否和arr1[0]相等
                return arr1[1]; //arr1[1]刚好是value
            }
        }
    }
	
		function delCookie(key,value){
			addCookie(key,value,-1);//添加的函数,将时间设置为过去时间
		}
		
		 if(getCookie("user")!=undefined){
				 	   $(".login1 input")[0].value=getCookie("user");
				 	   $(".login2 input")[0].value=getCookie("pass"); 
				 	   $("#login_checked").attr('checked',true);
				 }
		 //获取用户输入的数据
	  $(".login4 input").on('click',function(){
	  			var phone=$(".login1 input").val().trim();
	  			var pass=$(".login2 input").val().trim();
	  			
			  	if($("#login_checked").is(":checked")){
			  				addCookie('user',phone,7);
			  				addCookie('pass',pass,7);
			  	}
         if(flag){
         			if(phone!="" && pass!=""){
         		var str="password="+pass+"&email="+phone+"&iphone="+phone;
         		console.log(str);
	  				fn1.ajax1(str);
         }else{
         		alert('用户密码不为空');
         }
         }else{
         	  alert("验证码不正确");
         }
	  		
	  });
			
})

		
