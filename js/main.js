$(function () {
	$('.photo__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""</button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""</button>'
	});

	$('.menu__btn').on('click', function () {
		$('.menu__list').slideToggle();
	});

	new WOW().init();

	var show = true;
	var countbox = ".reason__statistics-num";
	$(window).on("scroll load resize", function () {
			if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
			var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
			var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
			var w_height = $(window).height(); // Высота окна браузера
			var d_height = $(document).height(); // Высота всего документа
			var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
			if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
					$('.reason__statistics-num').css('opacity', '1');
					$('.reason__statistics-num').spincrement({
							thousandSeparator: ",",
							duration: 3000
					});
					show = false;
			}
	});



});