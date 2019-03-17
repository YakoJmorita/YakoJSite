// JavaScript Document
$(function(){
	
	/*导航下拉*/
	$('.nav>ul>li').hover(function(){
			
			$(this).addClass('nav_this')
			$(this).find('.sub_nav').slideDown(350)
			
			},function(){
				
				$(this).removeClass('nav_this')
				$(this).find('.sub_nav').hide()
				
				})
	
	$('.nav>ul>li').each(function(){
		$(this).find('.sub_chnal li:eq(0)').find('.sub_infor').show()
		$(this).find('.sub_chnal>ul>li:last').find('.sub_chname span').css('border-bottom','none')
		$(this).find('.sub_chnal li').hover(function(){
			
			$(this).find('.sub_infor').show().end().siblings().find('.sub_infor').hide();
			
			})
		
		$(this).find('.sub_nav').mouseleave(function(){
			
			$(this).find('.sub_chnal li:eq(0)').find('.sub_infor').show().end().siblings().find('.sub_infor').hide()
			
			})
				
		})
		
	/*头部搜索*/
	$('.search').hover(function(){
		
		
			
			$(this).find('.sub_search').slideDown(350)
			
			
			
			
			
		
		},function(){
			
			$(this).find('.sub_search').hide()
			
			})	
		
	/*首页五大栏目*/
	$('.five_chlist>ul>li').hover(function(){
		
		$(this).find('.five_show').slideDown(250)
		
		},function(){
			
			$(this).find('.five_show').slideUp(250)
			
			})
	
	/*发展历程*/
	$('.deve_list li:odd').addClass('cur')		
	$('.deve_list li:last').css('height','74px')

	
	/*产品列表*/
	
	var pro_show = function(){
		
		$('.pro_d .pro_Dbox').each(function(){
		
		$(this).find('.pro_Dbshbox').each(function(){
			
			
			$('.pro_Dbshbox:nth-child(10n+1),.pro_Dbshbox:nth-child(10n+2),.pro_Dbshbox:nth-child(10n+3),.pro_Dbshbox:nth-child(10n+4),.pro_Dbshbox:nth-child(10n+5)').addClass('z-index')
			
			$(this).find('.pro_Dbhlist>ul>li').each(function(){
				
				$(this).find('.sub_Dbplist li:eq(5)').nextAll().css('display','none')
				
				})
			
			var leng1 = $(this).find('.pro_Dbvlist li').length
			if(leng1>5){
				
				$(this).find('.pro_Dbmore2').show();
				
				}
			$(this).find('.pro_Dbmore2').click(function(){
				
				$(this).prev('.pro_Dbvlist').css('height','auto')
				if($(this).hasClass('cur')){
					
					$(this).removeClass('cur').find('span').html('Collapse')
					$(this).prev('.pro_Dbvlist').css('height','auto')
					
					}
					else{
						
						$(this).addClass('cur').find('span').html('View')
						$(this).prev('.pro_Dbvlist').css('height','120px')
						
						}
				
				})
			
			/*五级分类显示*/
			var leng2 = $(this).find('.pro_Dbhlist>ul>li').length
			if(leng2>0){
				
				$(this).find('.pro_Dbvlist,.pro_Dbmore2').hide()
				$(this).find('.pro_Dbhlist').show()
				
				}	
				
			$(this).find('.pro_Dbhname').click(function(){
				$(this).parents('.pro_Dbshbox').addClass('on')
				var $pro_child = $(this).parent('li').find('.sub_Dbplist')
				var $pro_chmore = $(this).parent('li').find('.pro_Dbmore1')
				
				var leng3 = $(this).parent('li').find('.sub_Dbplist li').length
				
						
				
				if($pro_child.is(":visible")){
			
					$(this).parent('li').removeClass('cur')
					$pro_child.hide()
					$pro_chmore.hide()
			
				}
				else{
				
					$(this).parent('li').addClass('cur')
				
					$pro_child.show().end().siblings().removeClass('cur').children('.sub_Dbplist').hide();
					
					if(leng3>5){
					
						$pro_chmore.show().end().siblings().children('.pro_Dbmore1').hide();
					
						}
					 else{
						 
						 $pro_chmore.hide().end().siblings().children('.pro_Dbmore1').hide();
						 
						 }		
					
				
				}
					
					
				
				})	
				
				$(this).find('.pro_Dbmore1').click(function(){
					
					if($(this).hasClass('cur')){
						
						$(this).find('span').html('收起全部')
						
						$(this).removeClass('cur').parent('li').find('.sub_Dbplist li:eq(5)').nextAll().css('display','block')
						}
						
						else{
							
							$(this).find('span').html('查看全部')
							
							$(this).addClass('cur').parent('li').find('.sub_Dbplist li:eq(5)').nextAll().css('display','none')
							
							}
					
					})
			
			})
		
		})
		
		
		}
		
		$(window).load(function(){
			
			pro_show()
			
			})
		
		/*产品详细*/
		$('.pro_Vdchnal li:last').find('span').css('border-bottom','none')
		
		/*下载中心*/
		$('.load .load_rel:odd').addClass('cur')
		
		$(window).scroll(function(){
		
		var scroll_top = $(this).scrollTop()
		
		if(scroll_top>150){
			
			$('.top').fadeIn(350)
			
			}
			else{
				
				$('.top').fadeOut(350)
				
		
				}
		
		var v_hg = $('.pro_Vt').height()		
		if(scroll_top>=v_hg+206){
			
			$('.pro_Vdshow').css({'position':'fixed','top':'0'})
			
			}	
			
			else{
				
				$('.pro_Vdshow').css({'position':'relative','top':'auto'})
				
				}	
		
		})
		
		/*表单当前*/
	$('.com_text').focus(function(){
		
		$(this).addClass('cur')
		
		})	
		
	$('.com_text').blur(function(){
		
		$(this).removeClass('cur')
		
		})
		
	})