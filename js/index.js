define(['jquery'],function(){
	//首页功能
	function Index(){
		
	}
	
	Index.prototype.init=function(){
	     //加载首页页面
		 var $btn=$('.indexTabNav li');
		 var $tab=$('.indexTabConWrap');
	     $.ajax({
		   			type:'post',
		   			url:'php/index.php',
		   			data:"table="+'fktm',
		   			beforeSend:function(){
		   				$tab.html('<img src="img/imgsindex/loading.gif" style="position:absolute;left:50%;top:50%;margin-left:-60px;margin-top:-60px"">');
		   			}
		   		}).done(function(data){
		   			var data=JSON.parse(data);
		   			var str='<div class="indexTabCon"><ul>';
		   			for (var i=0;i<data.length;i++) {
		   			str+='<li><div class="indexTabPic"><a href="#" target="_blank" title=""><img src="'+data[i].src+'" width="160" height="160"></a><p class="Tag Tag_b"><span>疯抢<br>口粮酒</span></p></div><div class="indexTabTit"><a href="#" target="_blank" title="">'+data[i].title+'</a></div><div class="indexTabPrice homegoodPrice"><strong  class="jxIndex_nowPrice_11344">'+data[i].price+'</strong></div></li>';
		   			}
		   			str+='</ul></div>';
		   			$tab[0].innerHTML=str;
		   		}).fail(function(){
		   			console.log("有问题");
		   		})
	     
	     
	     
	     
	     
	     
	     
	     
	     
	     
		
	}

	//轮播图效果
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
	
	//做tab切换的效果
	
	Index.prototype.tab=function($btn,$tab){
		  
		   $btn.on('mouseenter',function(){
		   		$(this).addClass('on').siblings().removeClass('on');
		   		
		   		var num=$(this).index();
		   		
		   		$tab[0].innerHTML='';
		   		var table='';
		   		switch(num){
		   			case 0: table='fktm';
		   			break;
		   			case 1: table='zxtm';
		   			break;
		   			case 2: table='cnxh';
		   			break;
		   			case 3: table='rmtj';
		   			break;
		   			case 4: table='manjiu';
		   			break;
		   			default: console.log("错了");
	
		   		}
		   		
 				console.log(table);
		   		$.ajax({
		   			type:'post',
		   			url:'php/index.php',
		   			data:"table="+table,
		   			beforeSend:function(){
		   				$tab.html('<img src="img/imgsindex/loading.gif" style="position:absolute;left:50%;top:50%;margin-left:-60px;margin-top:-60px">');
		   			}
		   		}).done(function(data){
		   			var data=JSON.parse(data);
		   			var str='<div class="indexTabCon"><ul>';
		   			for (var i=0;i<data.length;i++) {
		   			str+='<li><div class="indexTabPic"><a href="#" target="_blank" title=""><img src="'+data[i].src+'" width="160" height="160"></a><p class="Tag Tag_b"><span>疯抢<br>口粮酒</span></p></div><div class="indexTabTit"><a href="#" target="_blank" title="">'+data[i].title+'</a></div><div class="indexTabPrice homegoodPrice"><strong  class="jxIndex_nowPrice_11344">'+data[i].price+'</strong></div></li>';
		   			}
		   			str+='</ul></div>';
		   			$tab[0].innerHTML=str;
		   		}).fail(function(){
		   			console.log("有问题");
		   		})
		   		
		   })
	}
	
	//侧边切换
	Index.prototype.subtab=function($btn,$tab){
		  
		  $btn.on('mouseenter',function(){
		  		$(this).addClass('on').siblings().removeClass('on');
		  		var num=$(this).index();
		  		$tab.eq(num).css('display','block').siblings().css('display','none');
		  })
	}
	
	//侧边滑动
    Index.prototype.subSlideTab=function($btn,$tab,n){
    	     var timer=null;
    	     var num=1;
    	     var r=-1072+n;
    	     timer=setInterval(function(){
    	     		
    	     	    var l=-(num*268);
    	     	    console.log(l);
    	     	   console.log(l+":"+r);
    	     	    if(l==r){
    	     	    	$btn.animate({
    	     	    	left:l
    	     	    },400,function(){
    	     	    	$btn.css('left',-268);
    	     	    })
    	     	    	$tab.eq(0).addClass('on').siblings().removeClass('on');
    	     	    	num=1;
    	     	    }else{
    	     	    	$tab.eq(num-1).addClass('on').siblings().removeClass('on');
    	     	    	$btn.animate({
    	     	    	left:l
    	     	    },400)
    	     	    }
    	     	    
    	     	    num++;
    	     },1500)
    	     
    	     $tab.hover(function(){
    	     	clearInterval(timer)
    	     	   num=$(this).index()+1;
    	     	   $(this).addClass('on').siblings().removeClass('on');
    	     	   var l=-(num*268);
    	     	   $btn.animate({
    	     	    	left:l
    	     	    },400)
    	     	   
    	     },function(){
    	     	  timer=setInterval(function(){
    	     	    var l=-(num*268);
    	     	    console.log(l);
    	     	   console.log(l+":"+r);
    	     	    if(l==r){
    	     	    	$btn.animate({
    	     	    	left:l
    	     	    },400,function(){
    	     	    	$btn.css('left',-268);
    	     	    })
    	     	    	$tab.eq(0).addClass('on').siblings().removeClass('on');
    	     	    	num=1;
    	     	    }else{
    	     	    	$tab.eq(num-1).addClass('on').siblings().removeClass('on');
    	     	    	$btn.animate({
    	     	    	left:l
    	     	    },400)
    	     	    }
    	     	    num++;
    	     },1500)
    	     })
    }
    
    
	
	
	
	
	return new Index();
	
	
	
	
	
	
	
	
})