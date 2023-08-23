jQuery(function($) {

	// burger start
	$('.burger-menu').on('click', function (e) {
		$('.header').toggleClass('open');
		$('body').toggleClass('hidden');
		$(this).toggleClass('change');
	});

	// burger end

	$('#up').click(function(){
		$('html, body').animate({scrollTop: 0}, 800);
		return false;
	});

	// accordeon STARt


	//прикрепляем клик по заголовкам acc-head
	$('#accordeon .acc_head').on('click', function (){
		$('#accordeon .acc_head').removeClass('active');
		$(this).toggleClass('active');
		//скрываем все кроме того, что должны открыть
		$('#accordeon .acc_body').not($(this).next()).slideUp(700);
		// открываем или скрываем блок под заголовком, по которому кликнули
		$(this).next().slideToggle(700);
	});

	if (window.matchMedia("(min-width: 1200px)").matches){
		$('#accordeon .acc_head:first-child').addClass('active').next().slideToggle(700);;
	}

	// accordeon END

	$("input[type=tel]").mask("+7 (999)999-99-99");

	// modal START

	$('.btn-1').click(function(event){
		event.preventDefault();
		$('#modal-1').fadeIn();
		$('body').addClass('hidden');
	});

	$('.btn-3').click(function(event){
		event.preventDefault();
		$('#modal-3').fadeIn();
		$('body').addClass('hidden');
	});
	
	$('.btn-4').click(function(event){
		event.preventDefault();
		$('#modal-4').fadeIn();
		$('body').addClass('hidden');
	});

	$('.close-btn').click( function(){
		$('#modal-1').fadeOut();
		$('#modal-3').fadeOut();
		$('#modal-4').fadeOut();
		$('body').removeClass('hidden');
	});



	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.modal'); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			jQuery('#modal-1').fadeOut(100);
			jQuery('body').removeClass('hidden'); // скрываем его
		}
	});

	// скролим до якорей START
	if (window.matchMedia("(min-width: 1200px)").matches) {

		jQuery('.nav-menu .nav-scroll a').on('click', function (e) {
			var aid = jQuery(this).attr("href");
			jQuery('html,body').animate({scrollTop: $(aid).offset().top - 60}, 'slow');

		});
	}
	else {
		jQuery('.nav-menu .nav-scroll a').on('click', function (e) {
			var aid = jQuery(this).attr("href");
			$('.header').removeClass('open');
			$('body').removeClass('hidden');
			$('.burger-menu').toggleClass('change');
			jQuery('html,body').animate({scrollTop: jQuery(aid).offset().top - 60}, 'slow');

		});
	}

	// скролим до якорей END

});
// отправка формы START
	
	$(".recording__info form, .modal form").submit(function (e) {
		e.preventDefault();
		var data = new FormData();
		data.append('action', 'form_action');
		var dataSend = this.querySelectorAll('[data-send]');

		for (var i = 0; i < dataSend.length; i++) {
			var text, checked;
			data.append(dataSend[i].getAttribute('data-send'), dataSend[i].value);
			dataSend[i].value = '';

		}
		$.ajax({
			url: 'scripts/mail.php',
			type: 'POST',
			data: data,
			processData: false,
			contentType: false,
			error: function( xhr, textStatus ) {
				alert( [ xhr.status, textStatus ] );
			},
			success: function (res) {
				window.location.href = "/thanks.html"
			}
		});
	});

	// отправка формы END
	
	
	// клик Стоимость (шапка)
	
	jQuery('.nav-menu__item a[href="#cost"]').on('click', function (e) {
        ym(74705503,'reachGoal','cost_head_click')		
    });
    
    
    // клик Записаться (шапка)
	
	jQuery('.nav-menu__item a[href="#recording"]').on('click', function (e) {
        ym(74705503,'reachGoal','record_head_click');		
    });
    
    // клик Контакты (шапка)
	
	jQuery('.nav-menu__item a[href="#contacts"]').on('click', function (e) {
        ym(74705503,'reachGoal','contakt_head_click');	
    });
    
    // клик по номеру тлф (шапка+контакты+подвал)
	
	jQuery('.header__phone, .footer__phone, contact-tel').on('click', function (e) {
        ym(74705503,'reachGoal','contact-tel_click');	
    });
    
    // клик Записаться на анализ (баннер)
    
    jQuery('.t-spot__btn .btn').on('click', function (e) {
       	ym(74705503,'reachGoal','rec_banner_click')
    });
    
    // клик Записаться на анализ (блок стоимость)
    
    jQuery('.cost .btn').on('click', function (e) {
       	ym(74705503,'reachGoal','rec_analiz_click')
    });
    
    // клик Заказать звонок (подвал)
    
    jQuery('.footer__right .btn').on('click', function (e) {
       	ym(74705503,'reachGoal','callback_click')
    });
    
    //  клик Посмотреть расшифровку результата
    
    jQuery('.result__btn .btn').on('click', function (e) {
       	ym(74705503,'reachGoal','result_click')
    });
    
    // заполнение и отправка формы Заказать звонок (всплывающая, одна цель на все заполенния)
    
    jQuery('.modal form').attr("onsubmit","ym(74705503,'reachGoal','callback_form_submit'); return true;");
    