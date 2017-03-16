define(['jquery','cookie'],function(){
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
		var $w=$('#small_box').width()*$('#big_box').width()/800;
		var $h=$('#small_box').height()*$('#big_box').height()/800;
		$('#move').css({
			width:$w,
			height:$h
		})
		var scale=800/$('#small_box').width()
		
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
	Details.prototype.addcart=function(){
				var numarr=[];
				var productarr=[];
				var s=1;
			//获取商品数量
			$('#_nub').on('keyup',function(){
				s=$(this).val();
				if(s==0){
					s=1;
					alert("至少有一件哦");
					$(this).val(s)
				}
			})
			//打开
			$('.buyBtn-cart').on('click',function(){
				  $('#box').css('display','block');
				  
				  numarr.push(s);
				  productarr.push(1);
				  $.cookie('nums', numarr);
				  $.cookie('products', productarr);
			})
			//关闭
			$('.u-buy-close').on('click',function(){
				$('#box').css('display','none');
			})
			//跳转到购物车继续购物
			$('.u-buy-g').on('click',function(){
				$('#box').css('display','none');
			})
			//
			$('.u-buy-go').on('click',function(){
				window.location.href='../html/cart.html';
				return false;
				
			})
	
	}
	
	
	
	return new Details();
	
	
	
})