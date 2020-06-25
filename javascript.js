
$('html').css('opacity', 0);
$('html').delay(200).animate({'opacity': 1}, 500);


function carousel_1_show (){
	$('.project_box:nth-of-type(1)').css({'display': 'block', 'opacity': '0'}).animate({'opacity': 1}, 300);
	$('.project_box:nth-of-type(2)').hide(0);
	$('.project_box:nth-of-type(3)').hide(0);
	$('.carousel_show_1').css('background', '#B19B69');
	$('.carousel_show_2').css('background', 'rgba(177, 155, 105, 0.5)');
	$('.carousel_show_3').css('background', 'rgba(177, 155, 105, 0.5)');
};


function carousel_2_show (){
	$('.project_box:nth-of-type(2)').css({'display': 'block', 'opacity': '0'}).animate({'opacity': 1}, 300);
	$('.project_box:nth-of-type(1)').hide(0);
	$('.project_box:nth-of-type(3)').hide(0);
	$('.carousel_show_2').css('background', '#B19B69');
	$('.carousel_show_1').css('background', 'rgba(177, 155, 105, 0.5)');
	$('.carousel_show_3').css('background', 'rgba(177, 155, 105, 0.5)');
};

function carousel_3_show () {
	$('.project_box:nth-of-type(3)').css({'display': 'block', 'opacity': '0'}).animate({'opacity': 1}, 300);
	$('.project_box:nth-of-type(1)').hide(0);
	$('.project_box:nth-of-type(2)').hide(0);
	$('.carousel_show_3').css('background', '#B19B69');
	$('.carousel_show_1').css('background', 'rgba(177, 155, 105, 0.5)');
	$('.carousel_show_2').css('background', 'rgba(177, 155, 105, 0.5)');
};

function hideUpButton (){
	$('.up_button').hide();
};

function showUpButton (){
	$('.up_button').show();
};

function appendUpButton (){
	$('body').append('<button class="up_button"></button>');
};

	// Переполнение контента

$(function(){
		$('.content').filter(function () {
	    if ($(this).height() > 155 && $(document).width() > 1185) {
	     	 $(this).parent().addClass('overflowed') 
	    }
	});

			$('.tags_container').filter(function () {
	    if ($(this).height() > 32  && $(document).width() > 1185) {
	     	$(this).parent().addClass('overflowed')
	    }
	});

		
		$('.content').filter(function () {
	    if ($(this).height() > 185 && $(document).width() <= 1185) {
	     	 $(this).parent().addClass('overflowed')
	    }
	});

			$('.tags_container').filter(function () {
	    if ($(this).height() > 63  && $(document).width() <= 1185 && $(this).parent().height() > 490) {
	     	 $(this).parent().addClass('overflowed')
	    }
	});

	if($('.project_box').length > 3) {
	$('.project_box:nth-of-type(n+4)').hide(); 
	$('.projects_container').append('<div class="more_projects_button_container"><button class="more_projects_button">Смотреть все проекты</button></div>')
	}

// Эффект нажатия кнопки

$(function(){
	var moreInfoButton = $('<button class="more_info_button"></button>');
	$('.overflowed').append(moreInfoButton);
		$('body').on('mousedown', '.more_info_button', function(){
		$(this).css({
		    'background-size': '18px',
		    // 'box-shadow': 'inset 0px 0px 5px 2px rgba(0, 0, 0, 0.4)'
			});
		});

	    $('body').on('mouseup', '.more_info_button', function(){
	    	$(this).css({
	    	'background-size': '20px',
	    	'box-shadow': '0px 15px 25px rgba(0, 94, 243, 0.4)',
	    	'border': 'none'
	    	});
	  	});
	
	});
});


$(function(){
	$(window).on('resize', function(){
	if($(document).width() <= 745) {
		$('.page_title').text('ТЕ, КОМУ СЕЙЧАС НЕОБХОДИМО ПОМОЧЬ');
		$('.project_box:nth-of-type(1)').show();
		$('.project_box:nth-of-type(2)').hide();
		$('.project_box:nth-of-type(3)').hide();
		$('.carousel_button_panel').show();
		$('.carousel_show_1').css('background', '#B19B69');
		$('.carousel_show_2').css('background', 'rgba(177, 155, 105, 0.5)');
		$('.carousel_show_3').css('background', 'rgba(177, 155, 105, 0.5)');
		$('.donation_name').css('left', '0');
		$('.donation_name:first-of-type').css('color', 'white');
		$('.donation_name:not(:first-of-type)').css('color', '#4C8EF7');
		$('.donation_description:not(:first-of-type)').hide(0);
		$('.donation_description:first-of-type').fadeIn(400);
			if ($('.more_projects_button').text() === 'Свернуть') {
							$('.project_box').show();
							$('.carousel_button_panel').hide();
					}
			else {
				$('.project_box').css('opacity', '1');
				$('.carousel_button_panel').show();
			}
		}
		else {
			if ($(document).width() > 745 && $(document).width() <= 1185) {
				$('.page_title').text('ПРОЕКТЫ, КОТОРЫМ НЕОБХОДИМО ПОМОЧЬ');
				$('.project_box:nth-of-type(1)').show();
				$('.project_box:nth-of-type(2)').show();
				$('.project_box:nth-of-type(3)').hide();
				$('.carousel_button_panel').hide();
				$('.donation_name').css({'left': '0', 'top': '0px'});
				$('.donation_name:first-of-type').css('color', 'white');
				$('.donation_name:not(:first-of-type)').css('color', '#4C8EF7');
				$('.donation_description:not(:first-of-type)').hide(0);
				$('.donation_description:first-of-type').show(0);
						if ($('.more_projects_button').text() === 'Свернуть') {
							$('.project_box').show();
						}
						else {
							$('.project_box').css('opacity', '1');
						}
			}
			else {
			$('.page_title').text('ПРОЕКТЫ, КОТОРЫМ НЕОБХОДИМО ПОМОЧЬ');
			$('.project_box:nth-of-type(1)').show();
				$('.project_box:nth-of-type(2)').show();
				$('.project_box:nth-of-type(3)').show();
				$('.carousel_button_panel').hide();
				$('.donation_name').css({'left': '0', 'top': '-0px'});
				$('.donation_name:nth-of-type(2)').css('color', 'white');
				$('.donation_name:not(:nth-of-type(2))').css('color', '#4C8EF7');
				$('.donation_description:not(:nth-of-type(2)').hide(0);
				$('.donation_description:nth-of-type(2)').show(0);
							if ($('.more_projects_button').text() === 'Свернуть') {
							$('.project_box').show();
							}
							else {
								$('.project_box').css('opacity', '1');
								$('.carousel_button_panel').hide();
							}
				}
			}
	});

	if($(document).width() <= 745) {
		$('.page_title').text('ТЕ, КОМУ СЕЙЧАС НЕОБХОДИМО ПОМОЧЬ') 
		$('.project_box:nth-of-type(2)').hide();
		$('.project_box:nth-of-type(3)').hide();
		$('.carousel_button_panel').show();
		$('.carousel_show_1').css('background', '#B19B69');
		}
			else {
				if ($(document).width() >= 745 && $(document).width() <= 1185) {
				$('.project_box:nth-of-type(1)').show(); 
				$('.project_box:nth-of-type(2)').show();
				$('.project_box:nth-of-type(3)').hide();
				}
					else {
					$('.project_box:nth-of-type(1)').show(); 
					$('.project_box:nth-of-type(2)').show();
					$('.project_box:nth-of-type(3)').show();
				}
			}
	});

	$(function(){

		$('.carousel_show_1').on('click', function(){
			carousel_1_show();
		});

		$('.carousel_show_2').on('click', function(){
			carousel_2_show();
		});

		$('.carousel_show_3').on('click', function(){
			carousel_3_show();
		});

		$('.project_box:nth-of-type(1)').children(':not(.more_info_button)').on('click', function(){
			if($(document).width() <= 745 && $('.project_box:nth-of-type(1)').css('opacity') === '1' && $('.carousel_button_panel').css('display') === 'block') {
				carousel_2_show();
			}
		});

		$('.project_box:nth-of-type(2)').children(':not(.more_info_button)').on('click', function(){
			if($(document).width() <= 745  && $('.project_box:nth-of-type(2)').css('opacity') === '1'  && $('.carousel_button_panel').css('display') === 'block') {
				carousel_3_show();
			}
		});


		$('.project_box:nth-of-type(3)').children(':not(.more_info_button)').on('click', function(){
			if($(document).width() <= 745  && $('.project_box:nth-of-type(3)').css('opacity') === '1'  && $('.carousel_button_panel').css('display') === 'block') {
				carousel_1_show();
			}
		});

});

// Больше информации о проекте кнопка

$(function(){
    $('body').on('click', '.more_info_button', function(event){
		$('html, body').animate({ 								// поднимает скрол до верха выбранного элемента
	    	scrollTop: $(this).parent().position().top - 20  
		}, 500, 'swing')
		$(this).siblings('.content').toggleClass('slided_down');
	    	if($(this).siblings('.content').hasClass('slided_down')) 
	    	{
	    		$(this).siblings('.content').delay(100).animate({'max-height': '500px'}, 500, 'swing'); // анимация выпадения
	    		$(this).siblings('.tags_container').delay(100).animate({'max-height': '150px'}, 500, 'linear');;
	    	}

	    	else 
	    	{
				$(this).siblings('.content').animate({'max-height': '124px'}, 500, 'swing'); // анимация сворачивания
				$(this).siblings('.tags_container').animate({'max-height': '32px'}, 500, 'linear');;
	    	}

	});
});


// Смотреть все проекты

$(function(){

	$('body').on('click', '.more_projects_button', function() {

		if($('.project_box:nth-of-type(n+4)').css('display') === 'none') 
		{	
			if ($(document).width() <= 745) {
				$('.project_box:nth-of-type(n+2)')
					.css({'opacity': '0'})
					.slideDown(500, function(){
						$('.project_box:not(.overflowed)').css({'margin-bottom': '80px', 'min-height': '0px'});
					})
					.animate({'opacity': 1}, 300);
				$('.carousel_button_panel').hide();
				setTimeout(appendUpButton, 500);
				$('html, body').animate({
					scrollTop: $(this).parents().find('.project_box:nth-of-type(2)').position().top - 50  // класс объекта к которому приезжаем
					}, 700, 'swing');
				$(this).text('Свернуть');
				}
				else { 
					if ($(document).width() > 745 && $(document).width() <= 1185) {
						$('.project_box:nth-of-type(n+3)').css({'opacity': '0'}).slideToggle(500).animate({'opacity': 1}, 300);
						$('.carousel_button_panel').hide();
						setTimeout(appendUpButton, 500);
						$('html, body').animate({
						scrollTop: $(this).parents().find('.project_box:nth-of-type(4)').position().top + 40  // класс объекта к которому приезжаем
						}, 700, 'swing');
						$(this).text('Свернуть');
						}
						else {
							$('.project_box:nth-of-type(n+4)').css({'opacity': '0'}).slideDown(500).animate({'opacity': 1}, 300);
							$('.carousel_button_panel').hide();
							setTimeout(appendUpButton, 500);
							$('html, body').animate({
							scrollTop: $(this).parents().find('.project_box:nth-of-type(4)').position().top + 40  // класс объекта к которому приезжаем
							}, 700, 'swing');
							$(this).text('Свернуть');
						}
					}
				}

		else {
				if ($(document).width() > 745 && $(document).width() <= 1185) {
					$('.project_box:nth-of-type(n+3)').animate({'opacity': 0}, 300).slideUp(500);
					$('html, body').animate({
			        scrollTop: $(this).parents().find('.project_box:nth-of-type(1)').position().top  // класс объекта к которому приезжаем
			    	}, 700, 'linear');
					$('body').find('.up_button').remove();
					$(this).text('Смотреть все проекты');
					}
				else {
						if ($(document).width() <= 745) {
							$('.project_box:nth-of-type(n+2)')
							.animate({'opacity': 0}, 300, function(){
							$('.project_box:not(.overflowed)').css({'margin-bottom': '110px', 'min-height': '490px'})})
							.slideUp(500);
							$('.project_box').css('min-height', '490px');
							$('html, body').animate({
		       					scrollTop: $(this).parents().find('.project_box:nth-of-type(1)').position().top  // класс объекта к которому приезжаем
		    					}, 700, 'linear');
								$('body').find('.up_button').remove();
								$('.carousel_button_panel').show();
								$(this).text('Смотреть все проекты');
						}
							else {
							$('.project_box:nth-of-type(n+4)').animate({'opacity': 0}, 300).slideUp(500);
							$('html, body').animate({
			       			scrollTop: $(this).parents().find('.project_box:nth-of-type(1)').position().top  // класс объекта к которому приезжаем
			    			}, 700, 'linear');
							$('body').find('.up_button').remove();
							$('.carousel_button_panel').hide();
							$(this).text('Смотреть все проекты');	
						}
						}
					
			}

	});


 	$('body').on('mousedown', '.more_projects_button', function(){
    $(this).css(
    	{'box-shadow': 'none',
    	 'background': '#F3F3F3',
    	 'width': '198px',
    	 'height': '38px',
    	});
	});

    $('body').on('mouseup', '.more_projects_button', function(){
    	$(this).css({
    	'box-shadow': '0px 10px 25px rgba(177, 155, 105, 0.3)',
    	'width': '201px',
    	'height': '40px',
    	});
	});

	$('body').on('click', '.up_button', function() {
		$('html, body').animate({
		scrollTop: $('.page_title').position().top
		}, 500, 'swing');
	});	

});

$(window).scroll(function(){
	if($('html').scrollTop() < 80) {
		hideUpButton();
	}
	else {
		showUpButton();
	}
});

$(function(){
	$('.change_donation_name.down').on('click', function(){
		if($('.donation_description:nth-of-type(3)').css('display') === 'block' && $('.donation_description:nth-of-type(3)').css('opacity') === '1' ) {
			$('.donation_name').animate({
				'top': '-180px'
			}, 500);
			$('.donation_description:nth-of-type(4)').fadeIn(500);
			$('.donation_description:nth-of-type(3)').hide(0);;
			$('.donation_name:nth-of-type(4)').css('color', 'white');
			$('.donation_name:not(:nth-of-type(4))').css('color', '#4C8EF7');
					if ($(this).parents().find('.donation_description:nth-of-type(4)').height() > 350) {
						$(this).parents().find('.donation_description:nth-of-type(4)').css({
						'height': '380px',
						'overflow-y': 'scroll'
						});
					};
		}
			else {
				if ($('.donation_description:nth-of-type(2)').css('display') === 'block' && $('.donation_description:nth-of-type(2)').css('opacity') === '1' ) {
			$('.donation_name').animate({
				'top': '-90px'
			}, 500);
			$('.donation_description:nth-of-type(3)').fadeIn(500);
			$('.donation_description:nth-of-type(2)').hide(0);
			$('.donation_name:nth-of-type(3)').css('color', 'white');
			$('.donation_name:not(:nth-of-type(3))').css('color', '#4C8EF7');
			if ($(this).parents().find('.donation_description:nth-of-type(3)').height() > 350) {
				$(this).parents().find('.donation_description:nth-of-type(3)').css({
				'height': '380px',
				'overflow-y': 'scroll'
				});
			};
			}
				else {
					if ($('.donation_description:nth-of-type(4)').css('display') === 'block' && $('.donation_description:nth-of-type(4)').css('opacity') === '1' )
					{
						$('.donation_name').animate({
						'top': '-270px'
						}, 500);
						$('.donation_description:nth-of-type(5)').fadeIn(500);
						$('.donation_description:nth-of-type(4)').hide(0);
						$('.donation_name:nth-of-type(5)').css('color', 'white');
						$('.donation_name:not(:nth-of-type(5))').css('color', '#4C8EF7');
								if ($(this).parents().find('.donation_description:nth-of-type(5)').height() > 350) {
									$(this).parents().find('.donation_description:nth-of-type(5)').css({
									'height': '380px',
									'overflow-y': 'scroll'
									});
								};
					}
					else {
						if ($('.donation_description:nth-of-type(1)').css('display') === 'block' && $('.donation_description:nth-of-type(1)').css('opacity') === '1' ) {
						$('.donation_name').animate({
							'top': '0px'
						}, 500);
						$('.donation_description:nth-of-type(2)').fadeIn(500);
						$('.donation_description:nth-of-type(1)').hide(0);
						$('.donation_name:nth-of-type(2)').css('color', 'white');
						$('.donation_name:not(:nth-of-type(2))').css('color', '#4C8EF7');
							if ($(this).parents().find('.donation_description:nth-of-type(2)').height() > 350) {
								$(this).parents().find('.donation_description:nth-of-type(2)').css({
								'height': '380px',
								'overflow-y': 'scroll'
							});
			};
			}
					}
				}
			}
		
	
		$('.change_donation_name.down').on('mousedown', function(){
			$(this).css('transform', 'scale(0.8)');
	});

		$('.change_donation_name.down').on('mouseup', function(){
			$(this).css('transform', 'scale(1)');
	});	
	
		
	
	});
});


$(function(){
	$('.change_donation_name.up').on('click', function(){
		if($('.donation_description:nth-of-type(2)').css('display') === 'block' && $('.donation_description:nth-of-type(2)').css('opacity') === '1') {
			$('.donation_name').animate({
				'top': '90px'
			}, 500);
			$('.donation_description:nth-of-type(1)').fadeIn(500);
			$('.donation_description:nth-of-type(2)').hide(0);;
			$('.donation_name:nth-of-type(1)').css('color', 'white');
			$('.donation_name:not(:nth-of-type(1))').css('color', '#4C8EF7');
				if ($(this).parents().find('.donation_description:nth-of-type(1)').height() > 350) {
					$(this).parents().find('.donation_description:nth-of-type(1)').css({
					'height': '380px',
					'overflow-y': 'scroll'
					});
				};
		}
		else {
			if($('.donation_description:nth-of-type(3)').css('display') === 'block' && $('.donation_description:nth-of-type(3)').css('opacity') === '1') {
			$('.donation_name').animate({
				'top': '0px'
			}, 500);
			$('.donation_description:nth-of-type(2)').fadeIn(500);
			$('.donation_description:nth-of-type(3)').hide(0);;
			$('.donation_name:nth-of-type(2)').css('color', 'white');
			$('.donation_name:not(:nth-of-type(2))').css('color', '#4C8EF7');
				if ($(this).parents().find('.donation_description:nth-of-type(2)').height() > 350) {
					$(this).parents().find('.donation_description:nth-of-type(2)').css({
					'height': '380px',
					'overflow-y': 'scroll'
					});
				};
			}
			else {
				if($('.donation_description:nth-of-type(4)').css('display') === 'block' && $('.donation_description:nth-of-type(4)').css('opacity') === '1') {
			$('.donation_name').animate({
				'top': '-90px'
			}, 500);
			$('.donation_description:nth-of-type(3)').fadeIn(500);
			$('.donation_description:nth-of-type(4)').hide(0);;
			$('.donation_name:nth-of-type(3)').css('color', 'white');
			$('.donation_name:not(:nth-of-type(3))').css('color', '#4C8EF7');
				if ($(this).parents().find('.donation_description:nth-of-type(3)').height() > 350) {
					$(this).parents().find('.donation_description:nth-of-type(3)').css({
					'height': '380px',
					'overflow-y': 'scroll'
					});
				};
				}
				else {
					if($('.donation_description:nth-of-type(5)').css('display') === 'block' && $('.donation_description:nth-of-type(5)').css('opacity') === '1') {
					$('.donation_name').animate({
						'top': '-180px'
					}, 500);
					$('.donation_description:nth-of-type(4)').fadeIn(500);
					$('.donation_description:nth-of-type(5)').hide(0);;
					$('.donation_name:nth-of-type(4)').css('color', 'white');
					$('.donation_name:not(:nth-of-type(4))').css('color', '#4C8EF7');
						if ($(this).parents().find('.donation_description:nth-of-type(4)').height() > 350) {
							$(this).parents().find('.donation_description:nth-of-type(4)').css({
							'height': '380px',
							'overflow-y': 'scroll'
							});
						};
					}
				}
			}
		}
	});

		$('.change_donation_name.up').on('mousedown', function(){
			$(this).css('transform', 'scale(0.8)');
	});

		$('.change_donation_name.up').on('mouseup', function(){
			$(this).css('transform', 'scale(1)');
	});
});

$(function(){
	$('.donation_name:nth-of-type(1)').on('click', function(){ 
			if ($('.donation_description:nth-of-type(1)').height() > 350) {
				$('.donation_description:nth-of-type(1)').css({
				'height': '380px',
				'overflow-y': 'scroll'
				});
			};
				if ($(document).width() > 1185) 
				{
					$('.donation_name').animate({
					'top': '90px'
					}, 500);
				}
				if ($(document).width() > 745 && $(document).width() < 1185) 
				{
					$('.donation_name').animate({
					'left': '0px'
					}, 500);
				}
				if ($(document).width() <= 745) 
				{
					$('.donation_name').animate({
					'left': '0px'
					}, 500);
				}
			$('.donation_description:nth-of-type(1)').fadeIn(500);
			$('.donation_description:not(:nth-of-type(1))').hide(0);;
			$('.donation_name:nth-of-type(1)').css('color', 'white');
			$('.donation_name:not(:nth-of-type(1))').css('color', '#4C8EF7');

	});
});

$(function(){
	$('.donation_name:nth-of-type(2)').on('click', function(){ 
		if ($('.donation_description:nth-of-type(2)').height() > 350) {
			$('.donation_description:nth-of-type(2)').css({
			'height': '380px',
			'overflow-y': 'scroll'
			});
			};
						if ($(document).width() > 1185) 
				{
					$('.donation_name').animate({
					'top': '0px'
					}, 500);
				}
				if ($(document).width() > 745 && $(document).width() < 1185) 
				{
					$('.donation_name').animate({
					'left': '-255px'
					}, 500);
				}
				if ($(document).width() <= 745) 
				{
					$('.donation_name').animate({
					'left': '-110px'
					}, 500);
				}
			$('.donation_description:nth-of-type(2)').fadeIn(500);
			$('.donation_description:not(:nth-of-type(2))').hide(0);;
			$('.donation_name:nth-of-type(2)').css('color', 'white');
			$('.donation_name:not(:nth-of-type(2))').css('color', '#4C8EF7');

	});
});

$(function(){
	$('.donation_name:nth-of-type(3)').on('click', function(){ 
		if ($('.donation_description:nth-of-type(3)').height() > 350) {
				$('.donation_description:nth-of-type(3)').css({
				'height': '450px',
				'overflow-y': 'scroll'
				});
			};
			
			if ($(document).width() > 1185) 
				{
					$('.donation_name').animate({
					'top': '-90px'
					}, 500);
				}
				if ($(document).width() > 745 && $(document).width() < 1185) 
				{
					$('.donation_name').animate({
					'left': '-510px'
					}, 500);
				}
				if ($(document).width() <= 745) 
				{
					$('.donation_name').animate({
					'left': '-220px'
					}, 500);
				}
			$('.donation_description:nth-of-type(3)').fadeIn(500);
			$('.donation_description:not(:nth-of-type(3))').hide(0);;
			$('.donation_name:nth-of-type(3)').css('color', 'white');
			$('.donation_name:not(:nth-of-type(3))').css('color', '#4C8EF7');

});


	});

$(function(){
	$('.donation_name:nth-of-type(4)').on('click', function(){ 
			if ($('.donation_description:nth-of-type(4)').height() > 350) {
				$('.donation_description:nth-of-type(4)').css({
				'height': '380px',
				'overflow-y': 'scroll'
				});
			};

			
			if ($(document).width() > 1185) 
				{
					$('.donation_name').animate({
					'top': '-180px'
					}, 500);
				}
				if ($(document).width() > 745 && $(document).width() < 1185) 
				{
					$('.donation_name').animate({
					'left': '-765px'
					}, 500);
				}
				if ($(document).width() <= 745) 
				{
					$('.donation_name').animate({
					'left': '-330px'
					}, 500);
				}

					$('.donation_description:nth-of-type(4)').fadeIn(500);
					$('.donation_description:not(:nth-of-type(4))').hide(0);;
					$('.donation_name:nth-of-type(4)').css('color', 'white');
					$('.donation_name:not(:nth-of-type(4))').css('color', '#4C8EF7');
	});
});

$(function(){
	$('.donation_name:nth-of-type(5)').on('click', function(){ 
			if ($('.donation_description:nth-of-type(5)').height() > 350) {
				$('.donation_description:nth-of-type(5)').css({
				'height': '380px',
				'overflow-y': 'scroll'
				});
			};

			if ($(document).width() > 1185) 
				{
					$('.donation_name').animate({
					'top': '-270px'
					}, 500);
				}
				if ($(document).width() > 745 && $(document).width() < 1185) 
				{
					$('.donation_name').animate({
					'left': '-1020px'
					}, 500);
				}
				if ($(document).width() <= 745) 
				{
					$('.donation_name').animate({
					'left': '-440px'
					}, 500);
				}

			$('.donation_description:nth-of-type(5)').fadeIn(500);
			$('.donation_description:not(:nth-of-type(5))').hide(0);;
			$('.donation_name:nth-of-type(5)').css('color', 'white');
			$('.donation_name:not(:nth-of-type(5))').css('color', '#4C8EF7');

	});
});

$(function(){

		$('.donation_name:not(:first-of-type)').on('click', function(){ 
			if ($(document).width() < 1185) {
				$('.left').show(0);
			}
	});
});
// /asdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

$(function(){
	$('.change_donation_name.right').on('click', function(){
		if ($('.donation_description:nth-of-type(1)').css('display') === 'block' && $('.donation_description:nth-of-type(1)').css('opacity') === '1') {
			if ($(this).parents().find('.donation_description:nth-of-type(2)').height() > 350) {
				$(this).parents().find('.donation_description:nth-of-type(2)').css({
				'height': '500px',
				'overflow-y': 'scroll'
				});
			};
					$('.donation_description:nth-of-type(2)').fadeIn(500);
					$('.donation_description:not(:nth-of-type(2))').hide(0);;
					$('.donation_name:nth-of-type(2)').css('color', 'white');
					$('.donation_name:not(:nth-of-type(2))').css('color', '#4C8EF7');
					$('.left').show(300);
				if ($(document).width() > 745) {
					$('.donation_name').animate({
						'left': '-255px'
					}, 500);
				}
				else {
					if ($(document).width() <= 745) {
					$('.donation_name').animate({
						'left': '-110px'
					}, 500);
					}
				}
		}
		else {
				if ($('.donation_description:nth-of-type(2)').css('display') === 'block' && $('.donation_description:nth-of-type(2)').css('opacity') === '1') {
					if ($(this).parents().find('.donation_description:nth-of-type(3)').height() > 350) {
						$(this).parents().find('.donation_description:nth-of-type(3)').css({
						'height': '500px',
						'overflow-y': 'scroll'
						});
					};
					$('.donation_description:nth-of-type(3)').fadeIn(500);
					$('.donation_description:not(:nth-of-type(3))').hide(0);;
					$('.donation_name:nth-of-type(3)').css('color', 'white');
					$('.donation_name:not(:nth-of-type(3))').css('color', '#4C8EF7');
						if ($(document).width() > 745) {
							$('.donation_name').animate({
								'left': '-510px'
							}, 500);
						}
						else {
							if ($(document).width() <= 745) {
							$('.donation_name').animate({
								'left': '-220px'
							}, 500);
							}
						}
		}
				else {
						if ($('.donation_description:nth-of-type(3)').css('display') === 'block' && $('.donation_description:nth-of-type(3)').css('opacity') === '1') {
								if ($(this).parents().find('.donation_description:nth-of-type(4)').height() > 350) {
									$(this).parents().find('.donation_description:nth-of-type(4)').css({
									'height': '500px',
									'overflow-y': 'scroll'
									});
								};
									$('.donation_description:nth-of-type(4)').fadeIn(500);
									$('.donation_description:not(:nth-of-type(4))').hide(0);;
									$('.donation_name:nth-of-type(4)').css('color', 'white');
										$('.donation_name:not(:nth-of-type(4))').css('color', '#4C8EF7');
									if ($(document).width() > 745) {
										$('.donation_name').animate({
											'left': '-765px'
										}, 500);
									}
									else {
										if ($(document).width() <= 745) {
										$('.donation_name').animate({
											'left': '-330px'
										}, 500);
										}
					}
						}
						else {
									if ($('.donation_description:nth-of-type(4)').css('display') === 'block' && $('.donation_description:nth-of-type(4)').css('opacity') === '1') {
										if ($(this).parents().find('.donation_description:nth-of-type(5)').height() > 350) {
											$(this).parents().find('.donation_description:nth-of-type(5)').css({
											'height': '500px',
											'overflow-y': 'scroll'
											});
										};
											$('.donation_description:nth-of-type(5)').fadeIn(500);
											$('.donation_description:not(:nth-of-type(5))').hide(0);;
											$('.donation_name:nth-of-type(5)').css('color', 'white');
											$('.donation_name:not(:nth-of-type(5))').css('color', '#4C8EF7');
											if ($(document).width() > 745) {
												$('.donation_name').animate({
													'left': '-1020px'
												}, 500);
											}
											else {
												if ($(document).width() <= 745) {
												$('.donation_name').animate({
													'left': '-440px'
												}, 500);
											}
										}		
									}
									else {
											if ($('.donation_description:last-of-type').css('display') === 'block' && $('.donation_description:last-of-type').css('opacity') === '1') {
												if ($(this).parents().find('.donation_description:nth-of-type(1)').height() > 350) {
													$(this).parents().find('.donation_description:nth-of-type(1)').css({
													'height': '500px',
													'overflow-y': 'scroll'
													});
												};
												$('.donation_name').animate({
													'left': '0px'
												}, 500);
												$('.donation_description:nth-of-type(1)').fadeIn(500);
												$('.donation_description:not(:nth-of-type(1))').hide(0);;
												$('.donation_name:nth-of-type(1)').css('color', 'white');
												$('.donation_name:not(:nth-of-type(1))').css('color', '#4C8EF7');
												$('.left').hide(300);
									}	
									}
						}
				}
		}

	});

		$('.change_donation_name.right').on('mousedown', function(){
			$(this).css('transform', 'scale(0.8)');
	});

		$('.change_donation_name.right').on('mouseup', function(){
			$(this).css('transform', 'scale(1)');
	});	

});


$(function(){
	$('.change_donation_name.left').on('click', function(){
				if ($('.donation_description:nth-of-type(2)').css('display') === 'block' && $('.donation_description:nth-of-type(2)').css('opacity') === '1') {
					if ($(this).parents().find('.donation_description:nth-of-type(1)').height() > 350) {
						$(this).parents().find('.donation_description:nth-of-type(1)').css({
						'height': '500px',
						'overflow-y': 'scroll'
						});
					};
					$('.donation_description:nth-of-type(1)').fadeIn(500);
					$('.donation_description:not(:nth-of-type(1))').hide(0);;
					$('.donation_name:nth-of-type(1)').css('color', 'white');
					$('.donation_name:not(:nth-of-type(1))').css('color', '#4C8EF7');
					$('.left').hide(300);
						if ($(document).width() > 745) {
							$('.donation_name').animate({
								'left': '0px'
							}, 500);
						}
						else {
							if ($(document).width() <= 745) {
							$('.donation_name').animate({
								'left': '0px'
							}, 500);
							}
						}
						}
				else {
						if ($('.donation_description:nth-of-type(3)').css('display') === 'block' && $('.donation_description:nth-of-type(3)').css('opacity') === '1') {
								if ($(this).parents().find('.donation_description:nth-of-type(2)').height() > 350) {
									$(this).parents().find('.donation_description:nth-of-type(2)').css({
									'height': '500px',
									'overflow-y': 'scroll'
									});
								};
									$('.donation_description:nth-of-type(2)').fadeIn(500);
									$('.donation_description:not(:nth-of-type(2))').hide(0);;
									$('.donation_name:nth-of-type(2)').css('color', 'white');
										$('.donation_name:not(:nth-of-type(2))').css('color', '#4C8EF7');
									if ($(document).width() > 745) {
										$('.donation_name').animate({
											'left': '-255px'
										}, 500);
									}
									else {
										if ($(document).width() <= 745) {
										$('.donation_name').animate({
											'left': '-110px'
										}, 500);
										}
					}
						}
						else {
									if ($('.donation_description:nth-of-type(4)').css('display') === 'block' && $('.donation_description:nth-of-type(4)').css('opacity') === '1') {
										if ($(this).parents().find('.donation_description:nth-of-type(3)').height() > 350) {
											$(this).parents().find('.donation_description:nth-of-type(3)').css({
											'height': '500px',
											'overflow-y': 'scroll'
											});
										};
											$('.donation_description:nth-of-type(3)').fadeIn(500);
											$('.donation_description:not(:nth-of-type(3))').hide(0);;
											$('.donation_name:nth-of-type(3)').css('color', 'white');
											$('.donation_name:not(:nth-of-type(3))').css('color', '#4C8EF7');
											if ($(document).width() > 745) {
												$('.donation_name').animate({
													'left': '-510px'
												}, 500);
											}
											else {
												if ($(document).width() <= 745) {
												$('.donation_name').animate({
													'left': '-220px'
												}, 500);
											}
										}		
									}
									else {
											if ($('.donation_description:last-of-type').css('display') === 'block' && $('.donation_description:last-of-type').css('opacity') === '1') {
												if ($(this).parents().find('.donation_description:nth-of-type(4)').height() > 350) {
													$(this).parents().find('.donation_description:nth-of-type(4)').css({
													'height': '500px',
													'overflow-y': 'scroll'
													});
												};
												$('.donation_description:nth-of-type(4)').fadeIn(500);
												$('.donation_description:not(:nth-of-type(4))').hide(0);;
												$('.donation_name:nth-of-type(4)').css('color', 'white');
												$('.donation_name:not(:nth-of-type(4))').css('color', '#4C8EF7');
														if ($(document).width() > 745) {
																$('.donation_name').animate({
																'left': '-765px'
																}, 500);
															}
															else {
																if ($(document).width() <= 745) {
																$('.donation_name').animate({
																	'left': '-330px'
																}, 500);
															}
												
											}
										}
									}
						}
				}
		

	});

		$('.change_donation_name.left').on('mousedown', function(){
			$(this).css('transform', 'scale(0.8)');
	});

		$('.change_donation_name.left').on('mouseup', function(){
			$(this).css('transform', 'scale(1)');
	});	

});