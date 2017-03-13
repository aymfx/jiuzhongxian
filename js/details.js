define(['jquery'],function(){
	//定义构造函数
	function Details(){
		
	}
	
	//放大镜加切换
	Details.prototype.bigjing=function(){
		//图片切换
		var num=0;
		$('#show_center li').on('click',function(){
			$(this).addClass('on').siblings().removeClass('on');
			var num=$(this).index()+1;
			$('#small_box img').attr('src','../img/detailsImgs/small'+num+'.jpg');
			$('#big_box img').attr('src','../img/detailsImgs/big'+num+'.jpg');
		})
		//左右切换
		$('#show_left').on('click',function(){
			num--;
			if(num<1){
				num=1;
			}
			$('#show_center li').eq(num-1).addClass('on').siblings().removeClass('on');
			$('#small_box img').attr('src','../img/detailsImgs/small'+num+'.jpg');
			$('#big_box img').attr('src','../img/detailsImgs/big'+num+'.jpg');
		})


		$('#show_right').on('click',function(){
			num++;
			if(num>5){
				num=5;
			}
			$('#show_center li').eq(num-1).addClass('on').siblings().removeClass('on');
			$('#small_box img').attr('src','../img/detailsImgs/small'+num+'.jpg');
			$('#big_box img').attr('src','../img/detailsImgs/big'+num+'.jpg');
		})
		
		
		//放大镜效果
		var $w=$('#small_box').width()*$('#big_box').width()/880;
		var $h=$('#small_box').height()*$('#big_box').height()/880;
		$('#move').css({
			width:$w,
			height:$h
		})
		var scale=880/$('#small_box').width()
		$('#small_box').on('mouseenter',function(){
			$('#move').css('visibility','visible');
			$('#big_box').css('display','block');
			
			$('#small_box').on('mousemove',function(ev){
				var l=ev.clientX-move.offsetWidth/2-$('#small_box').offset().left;
		 		var t=ev.pageY-move.offsetHeight/2-$('#small_box').offset().top;
		    if(l<0){
		    	l=0;
		    }
		    console.log(l+":"+($('#move').width()));
		    
		    if(l>$('#small_box').width()-$('#move').width()){
		    	l=$('#small_box').width()-$('#move').width()
		    	console.log(l);
		    }
		    if(t<0){
		    	t=0;
		    }
		    if(t>$('#small_box').height()-$('#move').height()){
		    	t=$('#small_box').height()-$('#move').height();
		    }
		 		$('#move').css({
						left:l,
						top:t
					})
		 		
		        $('#big_box img').css({
		        	left:-scale*l,
		        	top:-scale*t
		        })
			})
		})
		$('#small_box').on('mouseleave',function(){
			$('#move').css('visibility','hidden');
			$('#big_box').css('display','none');
		})
		
		
		
		
		
		
		
		
		
	}
	
	
	
	
	return new Details();
	
	
	
})