define(['jquery',],function(){
	   //Cart构造函数 
	    function Cart(){
	    	
	    }
	    
	    //下面的产品
	    Cart.prototype.products=function(){
	    	  var $list=$('.cart_list');
	    	  $.ajax({
			   			type:'post',
			   			url:'../php/index.php',
			   			data:"table="+"listCart",
			   			beforeSend:function(){
			   				$list.html('<img src="../img/imgsindex/loading.gif" style="position:absolute;left:50%;top:50%;margin-left:-60px;margin-top:-60px">');
			   			}
			   		}).done(function(data){
			   			var data=JSON.parse(data);
			   			var str='<ul>';
			   			for (var i=0;i<5;i++){
			   				str+='<li><div class="imgBox"><a title="42°汾阳王吉祥1000ml（双瓶装）" href="http://www.jiuxian.com/goods-23281.html" target="_blank"><img width="160" height="160" src="'+data[i].src+'"></a></div><div class="goodInfo"><p class="goodName"><a title="42°汾阳王吉祥1000ml（双瓶装）" href="http://www.jiuxian.com/goods-23281.html" target="_blank">'+data[i].title+'</a></p><p class="goodPrice"><b>￥<span>'+data[i].price+'.00</span></b></p><p class="goodBuy"><a class="cartIcon" href="javascript:;" _proid="23281" isnotsale="false" name="add_to_cart_btn"><i class="cartIcon"></i><span>加入购物车</span></a></p></div></li>'
			   			}
			   			str+='</ul>';
			   			$list.html(str);
			   			
			   		}).fail(function(){
			   		   alert(1);
			   		})
	    }
	    
	    Cart.prototype.addcart.function(){
	    	  $('.cart_list li').
	    }
	    
	    return new Cart();
	    
	    
	    
})
