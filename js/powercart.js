define(['cart'],function(fn1){
	  fn1.products();
	  
	  return {
	  	   addother:function(){
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
			
			//删除所有商品
			$('#clear_cart').on('click',function(){
				$('.cartTab').html('');
				numarr = [];
				productarr = [];
				$.cookie('nums', numarr);
				$.cookie('products', productarr);
				sumAll=0;
				totals=0;
				$('.sumMoney').html(sumAll);
				$('.goodNum b').html(totals);
			});
			
			//删除选中
			$('.delete').on('click',function(){
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
			});
			
			
		}
	  }
})
