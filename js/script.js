"use strict";

window.addEventListener('DOMContentLoaded', () => {

	const header = document.querySelector('header'),
		menu = document.getElementById('nav'),
		menuA = document.querySelectorAll('#nav li a'),
		sections = document.querySelectorAll('section'),
		main = document.querySelector('.main'),
		about = document.querySelector('.about'),
		works = document.querySelector('.works'),
		contacts = document.querySelector('.contacts'),
		contactButton = document.querySelector('.main button');

	let isWorksOpen = false, //Была ли открыта секция Работы
		timerAboutMenu = 0; //Таймер для перекраски меню в черный в секции Обо мне

	function openSection(nameSection) { //Открытие нужной секции
		nameSection.classList.add('active');

		if (nameSection == works) {
			$('.works_slider__row').slick({
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: false,
				rows: 1,
				prevArrow: '.works_slider__arrow-left',
				nextArrow: '.works_slider__arrow-right',
				centerMode: false,
				variableWidth: false,
				responsive: [{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							rows: 1,
						}
					},
					{
						breakpoint: 600,
						settings: {
							rows: 1,
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		} else {
			if (isWorksOpen) {
				$('.works_slider__row').slick('unslick');
			}
		}

		if (nameSection == about) {
			timerAboutMenu = setTimeout(function () {
				header.classList.add('header-about');
			}, 3000);
		} else {
			clearTimeout(timerAboutMenu);
		}
	}

	function closeSections() {
		menuA.forEach(elem => {
			elem.classList.remove('active');
		});

		//Исчезновение блока при переключении меню
		sections.forEach(el => {
			el.classList.add('fadeOut');
			setTimeout(function () {
				el.classList.remove('fadeOut');
				el.classList.remove('active');
			}, 300);

			//Изменение цвета меню при выборе About
			if (header.className == 'header-about') {
				header.classList.remove('header-about');
			}
		});
	}

	// Главное меню
	menu.addEventListener('click', function (e) {
		closeSections();

		setTimeout(function () {
			var target = e.target;
			//Клик по Главной	
			if (target.className == 'main-section') {
				openSection(main);
			}
			//Клик по Обо мне
			if (target.className == 'about-section') {
				openSection(about);
			}
			//Клик по Работы
			if (target.className == 'works-section') {
				openSection(works);
				isWorksOpen = true;
			}
			//Клик по Контактам
			if (target.className == 'contacts-section') {
				openSection(contacts);
			}
			target.classList.add('active');
		}, 300);

		e.preventDefault();
	});

	//Кнопка Контакты в секции Главная
	contactButton.addEventListener('click', function (e) {
		closeSections();
		setTimeout(function () {
			contacts.classList.add('active');
			menuA[3].classList.add('active');
		}, 300);
	});
});

//Подключение slick-slider к иконкам в секции About
$('.about__icons-slick').slick({
	slidesToShow: 10,
	slidesToScroll: 5,
	infinite: false,
	rows: 1,
	arrows: false,
	centerMode: false,
	variableWidth: true,
	responsive: [{
			breakpoint: 900,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}
	]
});