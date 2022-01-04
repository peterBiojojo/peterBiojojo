var activeNum = 0;
var activeResult = false;
var voteCapable = true;
$(document).ready(function() {
	//Loading 物件
	
	if($('.wrap .box-container').length){
		setLoading();
	}
	
	//跳頁
	jumpForMobile();
	
	//設定基本視覺
	setBasicVisual();
	
	//背景滾動
	setBackgroundScroll();
	
	//設定內頁 Menu 互動
	setInnerPageMenu();
	
});
//
//
////投票
//function setVote(){
//	$('#floatView .smallView .content .question-block .submit .btn').click(function(){
//		if(activeResult||$('#floatView .smallView .content .question-block .question-line.active').length>0){
//			activeResult = false;
//			voteCapable = false;
//			var URL='ajaxVoteData.php';
//			var serialData=new Object();
//			if($('.inner-page.europe').length){
//				serialData['type']='Europe';
//			}else{
//				serialData['type']='orang';
//			}
//			serialData['choice']=$('#floatView .smallView .content .question-block .question-line.active').attr('id');
//			var chooseNum = serialData['choice'].substr(14, 15);
//			
//			$('#floatView .smallView .content h1 small').html('大家最認同的投資理念是:');
//			$('#floatView .smallView .content .vote-block .result-list .circle-'+chooseNum).find('.you-choose').show();
//			$('#floatView .smallView .content .vote-block .result-list .circle-'+chooseNum).find('h3').addClass('active');
//			var obj = $('#floatView .smallView .content .vote-block .result-list .circle-'+chooseNum).find('.pic');
//			TweenLite.to(obj, 1, {marginTop:-20,ease:Power1.easeOut,onComplete:function(){
//				TweenLite.to(obj, 1, {marginTop:0,ease:Power1.easeIn});
//			}});
//			setInterval(function(){
//				if(obj.hasClass('top')){
//					obj.removeClass('top');
//					TweenLite.to(obj, 1, {marginTop:-20,ease:Power1.easeOut});
//				}else{
//					obj.addClass('top');
//					TweenLite.to(obj, 1, {marginTop:0,ease:Power1.easeIn});
//				}
//			}, 1000);
//			$.ajax({
//				url: URL,
//				type:'POST',
//				data: serialData,
//				success: function(result){
//					var json = JSON.parse(result);
//					var totalPercent = json.question_line_1+json.question_line_2+json.question_line_3+json.question_line_4;
//					var value_1 = Math.ceil((json.question_line_1/totalPercent)*100);
//					var value_2 = Math.ceil((json.question_line_2/totalPercent)*100);
//					var value_3 = Math.ceil((json.question_line_3/totalPercent)*100);
//					var value_4 = 100-(value_1+value_2+value_3);
//					$('#floatView .smallView .content .vote-block .result-list .circle-1 .pic strong').html('0%');
//					$('#floatView .smallView .content .vote-block .result-list .circle-2 .pic strong').html('0%');
//					$('#floatView .smallView .content .vote-block .result-list .circle-3 .pic strong').html('0%');
//					$('#floatView .smallView .content .vote-block .result-list .circle-4 .pic strong').html('0%');
//					$('#floatView .smallView .content .vote-block .result-list .circle-1 .pic strong').attr('id',value_1);
//					$('#floatView .smallView .content .vote-block .result-list .circle-2 .pic strong').attr('id',value_2);
//					$('#floatView .smallView .content .vote-block .result-list .circle-3 .pic strong').attr('id',value_3);
//					$('#floatView .smallView .content .vote-block .result-list .circle-4 .pic strong').attr('id',value_4);
//					//alert(json.question_line_1);
//					
//					setTimeout(function(){
//						runNum($('#floatView .smallView .content .vote-block .result-list .circle-1 '),'%');
//						runNum($('#floatView .smallView .content .vote-block .result-list .circle-2 '),'%');
//						runNum($('#floatView .smallView .content .vote-block .result-list .circle-3 '),'%');
//						runNum($('#floatView .smallView .content .vote-block .result-list .circle-4 '),'%');
//					}, 200);
//					TweenLite.to($('#floatView .smallView .content .question-block'), 0.4, {opacity:0,onComplete:function(){
//						$('#floatView .smallView .content .question-block').hide();
//					}});
//					$('#floatView .smallView .content .vote-block').show();
//					TweenLite.to($('#floatView .smallView .content .vote-block'), 0.4, {opacity:1});
//				}
//			});
//		}else{
//			activeResult = false;
//			$('#floatView .smallView .content .msg').show();
//		}
//	});
//}
//

//設定內頁各小分頁互動
function setInnerPageContentInteraction(){
	if($('body').length){
		
		$('body .content #content-1 .list .line').hover(
				function(){
					clearInterval(timer);
					var floatBox = $('body .inner-line #content-1 .box .float-box');
					$(this).addClass('active');
					var num = $(this).attr('id');
					hoverNum = num;
					var time = 0;
					var text = '';
					var data_first_text = '';
					var data_second_text = '';
					var data_first_num = '';
					var data_second_num = '';
					var footer = '';
					if($('body .content #content-1 .line.active').length){
						time = 0.4;
					}
					floatBox.find('.text').html(text);
					floatBox.find('.first-data').html(data_first_text+'<strong class="runNum color-back" id="'+data_first_num+'">+'+data_first_num+'%</strong>');
					floatBox.find('.two-data').html(data_second_text+'<strong class="runNum color-back" id="'+data_second_num+'">+'+data_second_num+'%</strong>');
					floatBox.find('.footer').html(footer);
					runNum(floatBox.find('.first-data'),'+%',$(this));
					runNum(floatBox.find('.two-data'),'+%',$(this));
				},function(){
					clearInterval(timer);
					var floatBox = $('body .inner-line #content-1 .box .float-box');
					$(this).removeClass('active');
					floatBox.hide();
				}
			);
			//var floatBox = $('body .inner-line #content-1 .box .float-box');
			//var num = $(this).attr('id');
			/*if($(this).hasClass('active')){
				$(this).removeClass('active');
				floatBox.fadeOut();
			}else{
				
				
				$('body .content #content-1 .list .line').each(function(){
					if($(this).attr('id')==num){
						$(this).addClass('active');
					}else{
						$(this).removeClass('active');
					}
				});
			}*/
	}
}


function runNum(obj,type, mainObj){
	switch(type){
		case '+%':
			var distance = 50;
			var nowNumber = 0;
			var originalNum = parseInt(obj.find('.runNum').attr('id'));
			if(originalNum-distance>0){
				var nowNumber = originalNum-distance;
			}
			timer = setInterval(function(){
				
				if(hoverNum==mainObj.attr('id')){
					if(nowNumber<originalNum){
						nowNumber++;
					}else{
						clearInterval(timer);
					}
					obj.find('.runNum').html('+'+numberWithCommas(nowNumber)+'%');
				}
			}, 30);
			break;
		case 'line':
			var originalNum = parseFloat(obj.find('.runNum').attr('id'));
			var totalInt = Math.floor(originalNum);
			var nowNumber = Math.ceil((originalNum-totalInt)*100)/100;
			obj.find('.data-line').css('height',0);
			var time = 80;
			if(totalInt>15){
				time = 50;
			}
			
			var timer = setInterval(function(){
				if(nowNumber<originalNum){
					
					nowNumber=Math.floor(nowNumber*10)/10+1;
					
				}else{
					clearInterval(timer);
				}
				obj.find('.runNum').html(numberWithCommas(nowNumber)+'%');
			}, time);
			
			TweenLite.to(obj.find('.data-line'), 1, {delay:0.2,height:originalNum*8,ease:Quart.easeOut});
			break;
		case '%':
			var distance = 50;
			var nowNumber = 0;
			var originalNum = parseInt(obj.find('.runNum').attr('id'));
			if(originalNum-distance>0){
				var nowNumber = originalNum-distance;
			}
			var time = 100;
			if(originalNum>30){
				time = 50;
			}
			var timer = setInterval(function(){
				if(nowNumber<originalNum){
					nowNumber++;
				}else{
					clearInterval(timer);
				}
				obj.find('.runNum').html(numberWithCommas(nowNumber)+'%');
			}, time);
			break;
	}
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//設定內頁 Menu 互動
function setInnerPageMenu(){
	if($('body').length){
		$('body #menu .menu-line').each(function(){
			changeMenu($(this));
		});
		
		
		changeMenu($('body #menu .menu-line#home'));
		
		$('body .content .cancel').each(function(){
			var obj = $(this).parent().parent().parent().parent().find('.content-card');
			$('body .content #content-1 .line.active').removeClass('active');
			if(obj.hasClass('active')){
				obj.removeClass('active');
				activeNum = 0;
				changeContentWidth();
				$('body .content .content-more').each(function(){
					TweenLite.to($(this), 0.6, {width:0,ease:Quart.easeOut});
				});
			}
		});
		
		$('body .content .content-card').each(function(){
			$('body .content #content-1 .line.active').removeClass('active');
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				activeNum = 0;
				changeContentWidth();
				$('body .content .content-more').each(function(){
					TweenLite.to($(this), 0.6, {width:0,ease:Quart.easeOut});
				});
				
			}else{
				var obj = $(this).parent();
				$('body .content .content-box').each(function(){
					if($(this).attr('id')==obj.attr('id')){
						$(this).find('.content-card').addClass('active');
						activeNum = parseInt(obj.attr('id').charAt(8));
						changeContentWidth();
						if(obj.attr('id')=='content-2'){
							TweenLite.to($(this).find('.content-more'), 0.6, {width:700,ease:Quart.easeOut});
						}else{
							TweenLite.to($(this).find('.content-more'), 0.6, {width:530,ease:Quart.easeOut});
						}
					}else{
						$(this).find('.content-card').removeClass('active');
						TweenLite.to($(this).find('.content-more'), 0.6, {width:0,ease:Quart.easeOut});
						changeContentWidth();
					}
					
				});
			}
		});
		
		
	}
}

function changeMenu(obj){
	$('body #menu .menu-line').each(function(){
		if($(this).attr('id')==obj.attr('id')){
			
		}else{
			$(this).removeClass('active');
			TweenLite.to($(this), 0.3, {width:166.2});
		}
	});
	
	obj.addClass('active');
	TweenLite.to(obj, 0.3, { width:333.3});
}

function changeContentWidth(){
	if(activeNum>0){
		if(activeNum==2){
			var plusDistance = (activeNum*160)+90;
			$('body .content #content-2 .data-chart .data .line').each(function(){
				runNum($(this),'line');
			});
		}
	}
}

function changeTitle(){
	$('body .content .page-title .title').each(function(){
		if($(this).attr('id')=='content-'+activeNum){
			$(this).show();
			TweenLite.to($(this), 0.6, {opacity:1,ease:Quart.easeOut});
		}else{
			//$(this).hide(500);
			var obj = $(this);
			TweenLite.to($(this), 0.6, {opacity:0,ease:Quart.easeOut,onComplete:function(){
				obj.hide();
			}});
		}
	});
}


//背景滾動
function setBackgroundScroll(){
	if($('.wrap .box-container').length){
		var scrollNumber = 0;
		setInterval(function(){
			scrollNumber++;
			$('.wrap .box-container.orange-container .bg .pic').css('background-position','right '+(scrollNumber)+'px');
			$('.wrap .box-container.orange-container .bg .pic').css('-ms-background-position','right '+(scrollNumber)+'px');
		}, 40);
	}
}

//設定基本視覺
function setBasicVisual(){
	//TweenLite.to($('.wrap .middle-line .text'), 0, {marginTop:$(window).height()/2-280});
	
	
	$(window).resize(function(){
		adjustHeight();
	});
	
	function adjustHeight(){
		$('.window-height').each(function(){
			
			if($('body').length){
				/*if($(window).height()>765){
					$(this).css('height',$(window).height());
					$('body .content').css('height',$(window).height()-375);
				}else{*/
					$(this).css('height',0);
					$('body .content').css('height',270);
				//}
				
				
				changeContentWidth();
			}else{
				$(this).css('height',$(window).height());
				TweenLite.to($('.wrap .box-container'), 0, {width:$(window).width()/2});
				TweenLite.to($('.wrap .middle-line'), 0, {left:$(window).width()/2});
			}
		});
		
		if(($(window).height()/2-300)>0){
			TweenLite.to($('.wrap .middle-line .text'), 0, {marginTop:$(window).height()/2-300});
		}else{
			TweenLite.to($('.wrap .middle-line .text'), 0, {marginTop:0});
		}
		
	}
	adjustHeight();
	
	$('.action-hover').hover(
		function(){
			TweenLite.to($(this), 0.3,{opacity:0.7});
		},function(){
			TweenLite.to($(this), 0.3,{opacity:1});
		}
	);
	
	$('.action-scale').hover(
		function(){
			TweenLite.to($(this), 0.3,{scale:1.1});
		},function(){
			TweenLite.to($(this), 0.3,{scale:1});
		}
	);
	
	//home page
	if($('.wrap .box-container').length){
		TweenLite.to($('.wrap .box-container .bg .over-filter'), 0, {opacity:0.8});
		TweenLite.to($('.wrap .middle-line .bottom-text'), 0, {opacity:0});
		
		$('.wrap .box-container').css('width',$(window).width()/2);
		$('.wrap .middle-line').css('left',$(window).width()/2);
		
		var middleLineOpen = false;
		var sliding = false;
		$('.wrap .box-container .text').hover(
			function(){
				if(middleLineOpen){
					sliding = true;
					var obj = $(this).parent().parent();
					obj.css('z-index',10);
					TweenLite.to(obj.find('.over-filter'), 0.6, {opacity:0});
					TweenLite.to(obj, 0.6, {width:$(window).width(),ease:Power4.easeOut});
					if(obj.hasClass('orange-container')){
						TweenLite.to($('.wrap .middle-line'), 0.6, {left:47,ease:Power4.easeOut});
					}else{
						TweenLite.to($('.wrap .middle-line'), 0.6, {left:$(window).width()-47,ease:Power4.easeOut});
					}
				}
			},function(){
				var obj = $(this).parent().parent();
				TweenLite.to(obj.find('.over-filter'), 0.6, {opacity:0.85});
				TweenLite.to($('.wrap .middle-line'), 0.6, {left:$(window).width()/2,ease:Power4.easeOut});
				TweenLite.to(obj, 0.6, {width:$(window).width()/2,ease:Power4.easeOut,onComplete:function(){
					sliding = false;
					$('.wrap .middle-line').css('left','50%');
					obj.css({
						'z-index':4,
						'width':'50%'
					});
				}});
			}
		);
		
		$('.wrap .middle-line').hover(
			function(){
				var changeWidth = 355;
				TweenLite.to($(this), 0.3,{width:changeWidth,marginLeft:changeWidth/-2,ease:Quart.easeOut,onComplete:function(){
					if(sliding==false){
						TweenLite.to($('.wrap .middle-line .bottom-text'), 0.3, {opacity:1});
					}
				}});
			},function(){
				var changeWidth = 95;
				TweenLite.to($('.wrap .middle-line .bottom-text'), 0.1, {opacity:0});
				TweenLite.to($(this), 0.3, {delay:0.1,width:changeWidth,marginLeft:changeWidth/-2,ease:Quart.easeOut});
			}
		);
		
		TweenLite.to($('.wrap .middle-line'), 0.3,{delay:1,width:355,marginLeft:355/-2,ease:Quart.easeOut,onComplete:function(){
			if(sliding==false){
				TweenLite.to($('.wrap .middle-line .bottom-text'), 0.3, {opacity:1});
				TweenLite.to($('.wrap .middle-line .bottom-text'), 0.1, {delay:3,opacity:0});
				TweenLite.to($('.wrap .middle-line'), 0.3,{delay:3,width:95,marginLeft:95/-2,ease:Quart.easeOut,onComplete:function(){
					middleLineOpen=true;
				}});
			}
		}});
		
	}
	
	
}


//跳頁
function jumpForMobile(){
	//var url  = 'http://sdedo.com/abfunds/';
	if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		if( /Android/i.test(navigator.userAgent) ){
			if(navigator.userAgent.search("Mobile Safari")!=-1){
				
	 			if($('.wrap .box-container').length){
	 			}else{
	 				var ClipUrl = window.location.href.substring(0,window.location.href.search('orang'));
	 			}
			}else{
				
			}
		}else{
			if(screen.availWidth<600) {
	 			if($('.wrap .box-container').length){
	 			}else{
	 				var ClipUrl = window.location.href.substring(0,window.location.href.search('orang'));
	 			}
	 		}else{
	 		}
		}
	};
}

$(document).ready(function (){
           //td間隔顏色
           $(function(){       
                     $('.SQT tr:nth-child(2n)').addClass('odd');
					 $('#pro4-nav li:last-child ').addClass('last');
           });
});