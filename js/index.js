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
		   			$tab.html(str);
		   		}).fail(function(){
		   			console.log("有问题");
		   		})
		   		
		   		
		 //图片动起来
		 /*$('.logoAll li a img').hover(function(){
    	    	alert(0);
    	    	$(this).animate({
    	    		'left':'-100'
    	    	});
    	    },function(){
    	    	$(this).animate({
    	    		'left':'0'
    	    	});
    	    })*/
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
		   			$tab.html(str);
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
    
    Index.prototype.cheap=function($tab){
    	$.ajax({
		   			type:'post',
		   			url:'php/index.php',
		   			data:"table=yhtj",
		   			beforeSend:function(){
		   				$tab.html('<img src="img/imgsindex/loading.gif" style="position:absolute;left:7%;top:50%;margin-left:-60px;margin-top:-60px">');
		   			}
		   			
		   		}).done(function(data){
		   			var data=JSON.parse(data);
		   			var str='<div class="raceList"><ul><li><p><span></span></p><div class="raceListPic"><a href="#" ><img src="'+data[0].y_src+'" width="160" height="160"></a></div><div class="raceListTit"><a href="#" >'
		   			+data[0].y_title+'</a></div><div class="raceListPrice"><strong class="jxIndex_nowPrice_30819">'+data[0].y_price+'</strong></div><div class="raceListTime"  ><span>剩余:</span><i class="hours">25</i><span>小时</span><i class="minutes">48</i><span>分钟</span><i class="seconds">21</i><span>秒</span></div></li>'
		   			for (var i=1;i<data.length;i++) {
		   				if(i%6==0){
		   					str+='</ul></div><div class="raceList"><ul>';
		   				}
		   				str+='<li><p><span></span></p><div class="raceListPic"><a href="#" ><img src="'+data[i].y_src+'" width="160" height="160"></a></div><div class="raceListTit"><a href="#" >'+
		   				data[i].y_title+'</a></div><div class="raceListPrice"><strong class="">'
		   				+data[i].y_price+'</strong></div><div class="raceListTime" id="jxIndex_timeAct_30819" ><span>剩余:</span><i class="hours">25</i><span>小时</span><i class="minutes">48</i><span>分钟</span><i class="seconds">21</i><span>秒</span></div></li>'
		   			}
		   			str+='</ul></div>';
		   			$tab.html(str);

		   		}).fail(function(){
		   			console.log("有问题");
		   		})
		   		
    	
    }
    
    Index.prototype.cheaptab=function($btn,$cheap,$left,$right){
    			var num=0;
    	      $btn.on('mouseenter',function(){
		  		$(this).addClass('on').siblings().removeClass('on');
		  		num=$(this).index();
		  		$cheap.animate({
		  			left:num*-1198
		  		})
		  		
		  })
    	      $left.on('click',function(){
    	      		num--;
    	      		if(num<0){
    	      			num=0;
    	      		}
    	      		$btn.eq(num).addClass('on').siblings().removeClass('on');
    	      		$cheap.animate({
		  			left:num*-1198
		  		})
    	      })
    	       $right.on('click',function(){
    	      		num++;
    	      		if(num>2){
    	      			num=2;
    	      		}
    	      		$btn.eq(num).addClass('on').siblings().removeClass('on');
    	      		$cheap.animate({
		  			left:num*-1198
		  		})
    	      })
    	    
    }
    
    Index.prototype.recommend=function($btn,$titleSlider,$btnlr,$logoAll,$btnImg){
    		    var n=0;
    	 		var arr=['gftj','dfpp','yjpp'];
    	 		
    	 		
    	 		//第一个盒子呀
	    	 			$.ajax({
			   			type:'post',
			   			url:'php/index.php',
			   			data:"table="+arr[0],
			   			beforeSend:function(){
			   				$logoAll.html('<img src="img/imgsindex/loading.gif" style="position:absolute;left:50%;top:50%;margin-left:-60px;margin-top:-60px">');
			   			}
			   		}).done(function(data){
			   			var data=JSON.parse(data);
			   			
			   			var str='<div class="logoFirst" ><div class="logoFirstbd"><ul>';
			   			for (var j=0;j<data.length;j++) {
			   				  if(j==18){
			   				  	str+='</ul><ul>'
			   				  }
			   				  str+='<li><a title="五粮液旗舰店" href="http://shop.jiuxian.com/brand-214/activity-329.htm" target="_blank"><img src="'+data[j].src+'" width="280" height="80" style="margin-left: 0px;"></a></li>';
			   				  
			   			}
			   			str+='</ul></div></div>';
			   			$logoAll.eq(0).html(str);
			   			
			   		})
			   		
			   	//第二个盒子啊
			   	$.ajax({
			   			type:'post',
			   			url:'php/index.php',
			   			data:"table="+arr[1],
			   			beforeSend:function(){
			   				$logoAll.html('<img src="img/imgsindex/loading.gif" style="position:absolute;left:50%;top:50%;margin-left:-60px;margin-top:-60px">');
			   			}
			   		}).done(function(data){
			   			var data=JSON.parse(data);
			   			var str='<ul>';
			   			for (var j=0;j<data.length;j++) {
			   				  str+='<li><a  href="http://shop.jiuxian.com/brand-214/activity-329.htm" target="_blank"><img src="'+data[j].src+'" width="280" height="80" style="margin-left: 0px;"></a></li>';	  
			   			}
			   			str+='</ul>';
			   			$logoAll.eq(1).html(str);
			   		})
			   		
			    //第三个盒子呀
			    $.ajax({
			   			type:'post',
			   			url:'php/index.php',
			   			data:"table="+arr[2],
			   			beforeSend:function(){
			   				$logoAll.html('<img src="img/imgsindex/loading.gif" style="position:absolute;left:50%;top:50%;margin-left:-60px;margin-top:-60px">');
			   			}
			   		}).done(function(data){
			   			var data=JSON.parse(data);
			   			var str='<ul>';
			   			for (var j=0;j<data.length;j++) {
			   				  str+='<li><a  href="http://shop.jiuxian.com/brand-214/activity-329.htm" target="_blank"><img src="'+data[j].src+'" width="280" height="80" style="margin-left: 0px;"></a></li>';	  
			   			}
			   			str+='</ul>';
			   			$logoAll.eq(2).html(str);
			   		})
			    
    	    $btn.on('mouseenter',function(){
    	    	  n=$(this).index();
    	    	  $(this).addClass('on').siblings().removeClass('on');
    	    	  $titleSlider.animate({
    	    	  	left:n*105
    	    	  },400)
    	    	  if(n!=0){
    	    	  	$btnlr.css('display','none');
    	    	  }else{
    	    	  	$btnlr.css('display','block');
    	    	  }
    	    	   if(n==0){
    	    	  	  $logoAll.eq(0).css('display','block').siblings().css('display','none');
    	    	  	  $btnlr.css('display','block');
    	    	  	  $btnlr.find('.prevPage').on('click',function(){
    	    	  	  	var l=parseInt($('.logoFirstbd').css('left'));
    	    	  	  	if(l==0){
    	    	  	  		  
    	    	  	  	}else{
    	    	  	  		$('.logoFirstbd').animate({
    	    	  	  			left:0
    	    	  	  		})
    	    	  	  	}
    	    	  	  	    
    	    	  	  })
    	    	  	   $btnlr.find('.nextPage').on('click',function(){
    	    	  	   	     var l=parseInt($('.logoFirstbd').css('left'));
    	    	  	  	if(l==-1200){
    	    	  	  		 	
    	    	  	  	}else{
    	    	  	  		$('.logoFirstbd').animate({
    	    	  	  			left:-1200
    	    	  	  		})
    	    	  	  	}
    	    	  	   });
    	    	  	  
    	    	  }
    	    	    if(n==1){
    	        	
    	        	 $logoAll.eq(1).css('display','block').siblings().css('display','none');
    	        }
    	    	     if(n==2){
    	        	
    	        	 $logoAll.eq(2).css('display','block').siblings().css('display','none');
    	        }
    	    	  
    	    })
    	    
    	    //如果为第一个
    	    	  if(n==0){
    	    	  	  $logoAll.eq(0).css('display','block').siblings().css('display','none');
    	    	  	  $btnlr.css('display','block');
    	    	  	  $btnlr.find('.prevPage').on('click',function(){
    	    	  	  	var l=parseInt($('.logoFirstbd').css('left'));
    	    	  	  	if(l==0){
    	    	  	  		  alert('最左了');
    	    	  	  	}else{
    	    	  	  		$('.logoFirstbd').animate({
    	    	  	  			left:0
    	    	  	  		})
    	    	  	  	}
    	    	  	  	    
    	    	  	  })
    	    	  	   $btnlr.find('.nextPage').on('click',function(){
    	    	  	   	     var l=parseInt($('.logoFirstbd').css('left'));
    	    	  	  	if(l==-1200){
    	    	  	  		  alert('最右了');
    	    	  	  	}else{
    	    	  	  		$('.logoFirstbd').animate({
    	    	  	  			left:-1200
    	    	  	  		})
    	    	  	  	}
    	    	  	   });
    	    	  	  
    	    	  }
    	    //触摸图片
    }

   
   Index.prototype.floorTab=function($btn,$tab,$n){
   				var timer=null;
   				var num=0;
   				
   				var n=$n;
   				function tab(){
   				    timer=setInterval(function(){
   				    	if(num<n){
   				    	   
   				    		$btn.animate({
   				    			"left":-num*210
   				    		},400);
   				    	 $tab.eq(num).addClass('on').siblings().removeClass('on');
   				    	}else{
   				    		 
   				    		$btn.animate({
   				    			"left":-num*210
   				    		},400,function(){
   				    			$btn.css('left',0);
   				    			num=0;
   				    		});
   				    	$tab.eq(0).addClass('on').siblings().removeClass('on');
   				    	}
   				    	 num++;
   				    },2000)
   					
   				}
   				tab();
   				
   				
   				$tab.hover(function(){
   					clearInterval(timer);
   					num=$(this).index();
   					$btn.animate({
   				    			"left":-num*210
   				    },400);
   					  
   				},function(){
   					tab();
   				})
   }

    
	//取数据
	Index.prototype.floorImgs=function($imgs,table){
		 
		$.ajax({
			   			type:'post',
			   			url:'php/index.php',
			   			data:"table="+table,
			   			beforeSend:function(){
			   				$imgs.html('<img src="img/imgsindex/loading.gif" style="position:absolute;left:50%;top:50%;margin-left:-60px;margin-top:-60px">');
			   			}
			   		}).done(function(data){
			   			var data=JSON.parse(data);
			   			
			   			var str='<ul>';
			   			for (var j=0;j<data.length;j++) {
			   				  str+='<li><p class="Tag Tag_b"><span>爆款<br>推荐</span></p><div class="spiritListPic"><a href="#" target="_blank" title="【老酒特卖】45°沱牌头曲500ml"><img src="'+data[j].src+'" width="160" height="160" alt="【老酒特卖】45°沱牌头曲500ml"></a></div><div class="spiritListTit"><a href="#" target="_blank" title="【老酒特卖】45°沱牌头曲500ml">'+data[j].title+'</a></div><div class="spiritListPrice"><strong>'+data[j].price+'</strong></div></li>';  
			   			}
			   			str+='</ul>';
			   			$imgs.html(str);
			   		})
		
	}
	
	
	Index.prototype.bottomImgs=function($list1,table,$imgss,$bt,n){
		$.ajax({
		   			type:'post',
		   			url:'php/index.php',
		   			data:"table="+table,
		   			beforeSend:function(){
		   				$list1.html('<img src="img/imgsindex/loading.gif" style="position:absolute;left:7%;top:50%;margin-left:-60px;margin-top:-60px">');
		   			}
		   			
		   		}).done(function(data){
		   			var data=JSON.parse(data);
		   			var str='<ul><li><i class="topTenOne"></i><div class="topTenPic"><a href="#" target="_blank" title="53°茅台飞天500ml"><img src="'+data[0].src+'" width="90" height="90" alt="53°茅台飞天500ml"></a></div><div class="topTenTitBox"><div class="topTenTit"><a href="#" target="_blank" title="53°茅台飞天500ml">'+data[0].title+'</a></div><div class="topTenPrice"><strong>'+data[0].price+'</strong></div></div></li>'
		   			for (var i=1;i<data.length;i++) {
		   				if(i%n==0){
		   					str+='</ul><ul>';
		   				}
		   				str+='<li><i class="topTenOne"></i><div class="topTenPic"><a href="#" target="_blank" title="53°茅台飞天500ml"><img src="'+data[i].src+'" width="90" height="90" alt="53°茅台飞天500ml"></a></div><div class="topTenTitBox"><div class="topTenTit"><a href="#" target="_blank" title="53°茅台飞天500ml">'+data[i].title+'</a></div><div class="topTenPrice"><strong>'+data[i].price+'</strong></div></div></li>'
		   			}
		   			str+='</ul>';
		   			$list1.html(str);
		   			
		   			var $children=$imgss.eq(0).children();
		   			$children.eq(0).css('display','block').siblings().css('display','none');
		   			$bt.on('mouseenter',function(){
		   				var num=$(this).index();
		   				
		   				$children.eq(num).css('display','block').siblings().css('display','none');
		   				$(this).addClass('on').siblings().removeClass('on');
		   			})
		   			

		   		}).fail(function(){
		   			console.log("有问题");
		   		})
	
	}
	
	Index.prototype.scroll=function($top){
		  $top.on('click',function(){
		  		
		  		$('html,body').animate({
		  			scrollTop:0
		  		})
		  })
	}
	
	Index.prototype.louti=function($louti,$fixDiv){
		   var num=0;
            //出现快捷导航侧栏的条件
            $(window).scroll(function(){
                var $scroll=$(this).scrollTop();
                
                if($scroll>=1200){
                    $('.fixDiv').css('display','block');
                }else{
                     $('.fixDiv').css('display','none');
                }
                
               //拉动滚动条，侧边栏跳到相应的位置
                $louti.each(function(i){
                    var $top=$louti.eq(i).offset().top+200;
                    if($top>$scroll){
                    $('.floorOn').css('display','none');
					 $('.fixDiv div').eq(i).children().eq(0).css('display','block');
					var str=$fixDiv.eq(i).children().eq(0).attr('name');
					 $('.fixDiv div').eq(i).children().eq(0).html(str);
					num=i;
					$('.floorBg').css("opacity",1);
					 $('.fixDiv div').eq(i).children().eq(1).css("opacity",0);;
                        return false;
                    }
                })
            })
           
            //点击侧边快捷栏，样式相应的进行改变,相应的模块也要出现
            
          
       $('.fixDiv div').on('click',function(){
                var i=$(this).index();
                var $top=$('.louti').eq(num).offset().top;
                $('.fixDiv div').children().eq(0).css('display','none');
                $('.fixDiv div').eq(i).children().eq(0).css('display','block');
				var $top=$louti.eq(i).offset().top;
                $('html,body').animate({
                    scrollTop:$top
                },500)
                num=i;
            })
           
            var s=0;
            var str='';
             $('.fixDiv div').not('.floorBack').hover(function(){
				s=$(this).index();
             	$('.fixDiv div').eq(s).children().eq(0).css('display','block').animate({
             		'width':70
             	});
				   str=$('.fixDiv div').eq(s).children().eq(0).attr('hname');
					
					$('.fixDiv div').eq(s).children().eq(0).html(str);
             },function(){
             	 
             	$('.fixDiv div').eq(s).children().eq(0).animate({
             		'width':30
             	},300,function(){
             		if(s!=num){
             		  $('.fixDiv div').eq(s).children().eq(0).css('display','none');
             		}
             		str=$fixDiv.eq(s).children().eq(0).attr('name');
					$fixDiv.eq(s).children().eq(0).html(str);
             	});
             	
             })
            
            
            //回到顶部
            $('.floorBack').on('click',function(){
                $('html,body').animate({
                    scrollTop:0
                },700)
            })
	}
	
	Index.prototype.inputwd=function($wd,$search){
		$wd.on('keyup',function(){
			var script1 = document.createElement('script');
            script1.src = 'http://list.jiuxian.com/assKeyWords.htm?t=1489239431658&callback=taobao&wd='+$wd.val();
            document.body.appendChild(script1);
			if($wd.val().trim()==''){
				$search.css('display','none');
			}
		})
 
	}
	
	
	return new Index();
	
	
	
	
	
	
	
	
})