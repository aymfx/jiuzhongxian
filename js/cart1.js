define(['jquery', 'cookie'], function() {
	//Cart构造函数 
	function Cart() {

	}

	//下面的产品
	Cart.prototype.products = function() {
		var $list = $('.cart_list');
		$.ajax({
			type: 'post',
			url: '../php/index.php',
			data: "table=" + "listCart",
			beforeSend: function() {
				$list.html('<img src="../img/imgsindex/loading.gif" style="position:absolute;left:50%;top:50%;margin-left:-60px;margin-top:-60px">');
			}
		}).done(function(data) {
			var data = JSON.parse(data);
			var str = '<ul>';
			for(var i = 0; i < 5; i++) {
				str += '<li uid="' + data[i].id + '"><div class="imgBox"><a title="42°汾阳王吉祥1000ml（双瓶装）" href="http://www.jiuxian.com/goods-23281.html" target="_blank"><img width="160" height="160" src="' + data[i].src + '"></a></div><div class="goodInfo"><p class="goodName"><a title="42°汾阳王吉祥1000ml（双瓶装）" href="http://www.jiuxian.com/goods-23281.html" target="_blank">' + data[i].title + '</a></p><p class="goodPrice"><b>￥<span>' + data[i].price + '.00</span></b></p><p class="goodBuy"><a class="cartIcon" href="javascript:;" _proid="23281" isnotsale="false" name="add_to_cart_btn"><i class="cartIcon"></i><span>加入购物车</span></a></p></div></li>'
			}
			str += '</ul>';
			$list.html(str);

			new Cart().addcart(data);

		}).fail(function() {
			alert(1);
		})

	}

	Cart.prototype.addcart = function(data) {
		var $deleteproduct = null;
		var $delAll = null;
		var numarr = [];
		var productarr = [];
		var sumAll = 0;
		var totals = 0;
		//判断是否有商品存在于购物车
		if($.cookie('nums')) {
			//显示隐藏
			$('.showlist').css('display', 'block');
			$('.cartEmptyBox').css('display', 'none');

			//存在cookie，就要取值了
			numarr = $.cookie('nums').split(',');
			productarr = $.cookie('products').split(',');
			//取得总件数
			for(var i = 0; i < numarr.length; i++) {

				totals += parseInt(numarr[i]);
			}
			var oldDate = '';
			for(var i = 0; i < productarr.length; i++) {
				var oldTag = parseInt(parseInt(productarr[i]) - 1);
				var oldnums = numarr[i];
				var oldPrice = oldnums * data[oldTag].price;
				//算总价哟
				sumAll += oldPrice;
				oldDate += '<tr class="cTab-tr" uid="' + data[oldTag].id + '"><td class="cTab-check"><input type="checkbox" class="checkboxs" name="cart_item" checked=""></td><td class="cTab-name"><div class="cn-Pic"><a target="_blank" href="#"><img src="' + data[oldTag].src + '" width="52" height="52"></a></div><div class="cn-Con"><p class=" cn-Con-Name"><a target="_blank" href="#">' + data[oldTag].title + '</a></p><p class="cn-Con-Pro"><span class="tip1">限时购</span></p></div></td><td class="cTab-jxPri">￥<span>' + data[oldTag].price + '</span></td><td class="cTab-gold">64金币</td><td class="cTab-amount"><div class="cAmount-add"><span class="cartIcon ca-minus jian"></span><input class="ctxt" type="text" value="' + oldnums + '"   src=""><span class="cartIcon ca-plus plusOn jia"></span></div><div class="cAmount-pro numLimited">有货</div></td><td class="cTab-subt">' + oldPrice + '元</td><td class="cTab-ope"><div class="opeBox"><a href="javascript:void(0);" class="delete">删除</a><a href="javascript:void(0);" class="sc">收藏</a></div></td></tr>'

			}
			var text = $('.cartTab').html() + oldDate;
			$('.cartTab').html(text);
			$deleteproduct = $('.delete');
			$deleteproduct.on('click', del);
			$delAll = $('#clear_cart')
			$delAll.on('click', delall);
			
			//判断是否全选了
			var flag = true;
			$('.checkboxs').each(function() {
				if(!this.checked) {
					flag = false;
					return false;
				}
			})
			if(true) {
				$('.checkAll').prop('checked', true);
			}

			addother();

		} else {
			//显示隐藏
			$('.showlist').css('display', 'none');
			$('.cartEmptyBox').css('display', 'block');

		}

		//点击操作添加，商品
		$('.goodBuy').on('click', function() {
			//哈哈哈哈不行了吧
			if($.cookie('nums')) {
				numarr = $.cookie('nums').split(',');
				productarr = $.cookie('products').split(',');
			}
			//显示隐藏
			$('.showlist').css('display', 'block');
			$('.cartEmptyBox').css('display', 'none');
			var content = '';
			//获取点击的index
			var num = parseInt($(this).parent().parent().attr('uid')) - 1;
			//判断是否重复添加
			
			if($.inArray(data[num].id, productarr) != -1) {
				console.log(1);
				var tag = data[num].id;
				var n = $.inArray(tag, productarr);
				var a = parseInt($('.cartTab tr[uid=' + tag + ']').find('.ctxt').val());
				a++;
				totals++;
				sumAll+=parseInt(data[num].price);
				$('.sumMoney').html(sumAll);
				$('.goodNum b').html(totals);
				var sum = data[num].price * a;
				$('.cartTab tr[uid=' + tag + ']').find('.ctxt').attr('value', a);
				$('.cartTab tr[uid=' + tag + ']').find('.cTab-subt').html(sum);
				numarr[n] = a;
				$.cookie('nums', numarr);
				$.cookie('products', productarr);
				addother();
				$('.checkboxs').trigger('change');
				
			} else {
				productarr.push(data[num].id);
				totals++;
				sumAll+=parseInt(data[num].price);
				$('.sumMoney').html(sumAll);
				$('.goodNum b').html(totals);
				numarr.push(1);
				content += '<tr class="cTab-tr" uid="' + data[num].id + '"><td class="cTab-check"><input type="checkbox" class="checkboxs" name="cart_item" checked=""></td><td class="cTab-name"><div class="cn-Pic"><a target="_blank" href="#"><img src="' + data[num].src + '" width="52" height="52"></a></div><div class="cn-Con"><p class=" cn-Con-Name"><a target="_blank" href="#">' + data[num].title + '</a></p><p class="cn-Con-Pro"><span class="tip1">限时购</span></p></div></td><td class="cTab-jxPri">￥<span>' + data[num].price + '</span></td><td class="cTab-gold">64金币</td><td class="cTab-amount"><div class="cAmount-add"><span class="cartIcon ca-minus jian"></span><input class="ctxt" type="text" value="' + 1 + '"   src=""><span class="cartIcon ca-plus plusOn jia" ></span></div><div class="cAmount-pro numLimited">有货</div></td><td class="cTab-subt">' + data[num].price + '元</td><td class="cTab-ope"><div class="opeBox"><a href="javascript:void(0);" class="delete">删除</a><a href="javascript:void(0);" class="sc">收藏</a></div></td></tr>';
				var text = $('.cartTab').html() + content;
				$('.cartTab').html(text);
				$deleteproduct = $('.delete');
				$deleteproduct.on('click', del);
				$delAll = $('#clear_cart');
				$delAll.on('click', delall);
				$.cookie('nums', numarr);
				$.cookie('products', productarr);
				addother();
				
			}
			
			//查看内容呀
			console.log(numarr + ":" + productarr + ">>>>>>>");

			//存入cookie
			$.cookie('nums', numarr);
			$.cookie('products', productarr);
			numarr = [];
			productarr = [];
		})

		//删除购物车东西
		function del() {
			if($.cookie('nums')) {
				numarr = $.cookie('nums').split(',');
				productarr = $.cookie('products').split(',');
			}
			var num = $(this).parent().parent().parent().index();
			var delproduct = $('.cartTab tr').eq(num).attr('uid');
			var s = delproduct;
			var price_a = parseInt($('.cartTab tr[uid=' + delproduct + ']').find('.cTab-subt').html());
		    var num_a = parseInt($('.cartTab tr[uid=' + delproduct + ']').find('.ctxt').val());
		    
					totals-=num_a;
					sumAll-=price_a;
					$('.sumMoney').html(sumAll);
					$('.goodNum b').html(totals);
					
			delproduct = productarr.indexOf(delproduct);

			productarr.splice(delproduct, 1);
			numarr.splice(delproduct, 1);

			$('.cartTab tr[uid=' + s + ']').remove();
			$.cookie('nums', numarr);
			$.cookie('products', productarr);
			console.log('删除后的数组' + numarr + ":" + productarr);

		}

		//删除所有

		function delall() {
			
			$('.cartTab').html('');
			numarr = [];
			productarr = [];
			$.cookie('nums', numarr);
			$.cookie('products', productarr);
			sumAll=0;
			totals=0;
			$('.sumMoney').html(sumAll);
			$('.goodNum b').html(totals);
			
		}

		//添加其他功能
		function addother() {
			$('.sumMoney').html(sumAll);
			$('.goodNum b').html(totals);
			

			$('.checkAll').on('change', function() {
				var flag = true;
				$('.checkboxs').each(function() {
					if(!this.checked) {
						flag = false;
						return false;
					}
				})
				if(flag) {
					$('.checkAll').prop('checked', false);
					$('.checkboxs').prop('checked', false);
					$('.sumMoney').html('0');
					$('.goodNum b').html('0');
				} else {
					$('.checkAll').prop('checked', true);
					$('.checkboxs').prop('checked', true);
					$('.sumMoney').html(sumAll);
					$('.goodNum b').html(totals);

				}
			})
			$('.checkboxs').on('change', function() {
				
				var flag = true;
				$('.checkboxs').each(function() {

					if(!this.checked) {
						flag = false;
						return false;
					}
				});
				if(flag) {
					$('.checkAll').prop('checked', true);
					$('.checkAll').prop('checked', true);
					$('.sumMoney').html(sumAll);
					$('.goodNum b').html(totals);
				} else {
					$('.checkAll').prop('checked', false);
					$('.checkAll').prop('checked', false);
					var sumAll1 = 0;
					var totals1 = 0;
					$('.checkboxs').filter(':checked').each(function(i) {
						
						var uidx = $(this).parent().parent().attr('uid').toString();

						var price_a = parseInt($('.cartTab tr[uid=' + uidx + ']').find('.cTab-subt').html());
						var num_a = parseInt($('.cartTab tr[uid=' + uidx + ']').find('.ctxt').val());

						sumAll1 += price_a;
						totals1 += num_a;
					})
					$('.sumMoney').html(sumAll1);
					$('.goodNum b').html(totals1);
				}

			})

			//删除选中商品
			$('.deleteGood').on('click', function() {
				$('.checkboxs').filter(':checked').each(function() {
					var uidx = $(this).parent().parent().attr('uid');
					uidx1 = productarr.indexOf(uidx);
					
					var price_a = parseInt($('.cartTab tr[uid=' + uidx + ']').find('.cTab-subt').html());
					var num_a = parseInt($('.cartTab tr[uid=' + uidx + ']').find('.ctxt').val());
					totals-=num_a;
					sumAll-=price_a;
					
					alert(totals+":"+sumAll);
					productarr.splice(uidx1, 1);
					numarr.splice(uidx1, 1);

				})
				$('.sumMoney').html(sumAll);
				$('.goodNum b').html(totals);
				$.cookie('nums', numarr);
				$.cookie('products', productarr);
				$('.checkboxs').filter(':checked').parent().parent().remove();
			})
			
			//加加减减
			$('.jian').on('click',function(){
				  var uidx = $(this).parent().parent().parent().attr('uid');
				  
				  var num_a = parseInt($('.cartTab tr[uid=' + uidx + ']').find('.ctxt').val());
				  if(num_a<1){
				  	   
				  }else{
				  	 var price_a = parseInt($('.cartTab tr[uid=' + uidx + ']').find('.cTab-subt').html());
				  	 alert(totals+":"+sumAll+">>");
			  		 totals-=num_a;
			  		 sumAll-=price_a;
			  		 num_a--;
			  		 $('.cartTab tr[uid=' + uidx + ']').find('.ctxt').val(num_a);
			  		 alert(totals+":"+sumAll);
			  		 
				  }
				$('.sumMoney').html(sumAll);
				$('.goodNum b').html(totals);
				$.cookie('nums', numarr);
				$.cookie('products', productarr);
			})
			
			
		}
		
		

	}

	return new Cart();

})