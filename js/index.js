define(['jquery'],function(){
	//首页功能
	function Index(){
		
	}
	Index.prototype.lunbo=function($img,$btn,num){
		var n=0;
		var timer=null;
		timer=setInterval(function(){
			     
	   			if(n>num){
	   			n=0;
	   		}else{
	   			
//	   			$img.animate();
   				$img.eq(n).animate({opacity:1},400).siblings().animate({opacity:0},400);   
   				$btn.removeClass("on");
   				$btn.eq(n).addClass("on");
   				n++;

	   		}
	   		},1500);
	   		
	   $btn.hover(function(){
	   		
	   	    clearInterval(timer);
	   		n=$(this).html()-1;
	   		console.log(n);
	   		$img.eq(n).animate({opacity:1},400).siblings().animate({opacity:0},400);
	   		$btn.removeClass("on");
	   		$(this).addClass("on");
	   },function(){
	   		clearInterval(timer);
	   		timer=setInterval(function(){
	   			
	   			if(n>num){
	   			n=0;
	   		}else{
	   			n++;
	   			$img.eq(n).animate({opacity:1},400).siblings().animate({opacity:0},400);
	   			$btn.removeClass("on");
	   			$btn.eq(n).addClass("on");
	   		}
	   		},1500);
	   });
		
			
	}
	
	
	
	
	
	
	return new Index();
	
	
	
	
	
	
	
	
})