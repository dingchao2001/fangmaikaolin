$(function(){
	//回到顶部
		$(window).scroll(function(){
		
			if($(window).scrollTop()>200){
				//console.log($(window).scrollTop())
				$('#scr').fadeIn(1000)
			}
			else{$('#scr').fadeOut(1000)}
			
		})	
		//nav 里面的li变色
				$('#nav ul li').mouseenter(function(){
					$(this).css('background','#db366f')
				})
				$('#nav ul li').mouseleave(function(){
					$(this).css('background', 'url(img/navbg.png) no-repeat bottom center #d10048')
				})
				
				//span里面的a变色
				$('#nav ul li span a').mouseenter(function(){
					$(this).css('background','#db366f')
				})
				$('#nav ul li span a').mouseleave(function(){
					$(this).css('background','#ababab')
				})
				
				
				
                 //li里面的span显示与隐藏
				$('#sp').mouseenter(function() {
					$('#spa').show(200)
				})
				$('#sp').mouseleave(function() {
						$('#spa').hide(200)
					})
               //号码图片显示与隐藏
				$('#tel').mouseenter(function() {
                     $('#ke').css('z-index',9999)
					$('#ke').animate({
						'right': 66,
						'opacity':1
					}, 400)
				})

				$('#tel').mouseleave(function() {

					$('#ke').animate({
						'right': 200,
						'opacity': 0
					}, 400,function(){
					$('#ke').css('z-index',-1)	
					})
				})
	
})