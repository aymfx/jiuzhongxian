define(["jquery"],function(){
	   
	   //验证各种情况
	   function Register(){
	   	
	   }
	   //验证手机是否正确
	   Register.prototype.shouji=function(str){
	   	    	var reg=/^1[3578]\d{9}$/;
	   			return reg.test(str);
	   }
	   
	   //邮箱是否正确
	   Register.prototype.youxiang=function(str){
	   			var reg=/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
	   			return reg.test(str);
	   }
	   
	   //
	   Register.prototype.mima=function(str){
	   	    	var num = 0;
	   	    	
			  	if (str.length != 0) {
                if (str.length >= 6) {
                    var reg1 = /\d+/g;
                    var reg2 = /[a-zA-Z]+/g;
                    var reg3 = /[^\w]+/g;
                    
                    if (reg1.test(str)) {
                        num++;
                    }
                    if (reg2.test(str)) {
                        num++;
                    }
                    if (reg3.test(str)) {
                        num++;
                    }}else{
                    	 return 0;
                    }
                
			  		 }else{
			  		 	return 0;
			  		 }
			  	return num;
	   }
	   //确认密码
	    Register.prototype.querenmima=function(str1,str2){
	   	    	if(str1!=str2){
	   	    		return false;
	   	    	}else{
	   	    		return true;
	   	    	}
	   }
	   
	   //确认是否同意条款
	   Register.prototype.agreeinfo=function(obj){
	   	    	if($(obj).is(":checked")){
	   	    		return true;
	   	    	}else{
	   	    		return false;
	   	    	}
	   }
	   Register.prototype.ajax1=function(str){
	   	   $.ajax({
		  	  	    	type:"post",
		  	  	    	url:"../php/register.php",
	  	  	    		data:str,
		  	  	    	async:true,
		  	  	    	success:function(data){
		  	  	    		alert(data);
		  	  	    		setTimeout(function(){
		  	  	    			window.location.href="../html/login.html";
		  	  	    		},1000)
		  	  	    	},
		  	  	    	error:function(){
		  	  	    		alert("注册失败");
		  	  	    	}
		  	  	    })
	   }
	   return new Register();
})