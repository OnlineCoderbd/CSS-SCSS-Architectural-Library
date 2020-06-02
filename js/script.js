/*
Template Name: Orio HTML Template
Author       : The UX Lab
Version      : 1.0
*/

(function ($) {

	"use strict";

	
	// Sticky Menu 
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-area").removeClass("scroll-header");
		} else {
			$(".header-area").addClass("scroll-header");
		}
	});

	// scrollToTop
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.scrollToTop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// offcanvas menu
	$(".menu-tigger").on("click", function () {
		$(".extra-info,.offcanvas-overly").addClass("active");
		return false;
	});
	$(".menu-close,.offcanvas-overly").on("click", function () {
		$(".extra-info,.offcanvas-overly").removeClass("active");
	});

	// Project Slider
	$('.project-active').owlCarousel({
		loop: true,
		nav: true,
		autoPlay: true,
		margin: 30,
		navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
		dots: false,
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			600: {
				items: 1,
				nav: false,
			},
			1000: {
				items: 2,
			}
		}
	});

	// Service Slider
	$('.service-slider-active').owlCarousel({
		loop: true,
		autoPlay: true,
		nav: false,
		margin: 30,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			}
		}
	});


	// Portfolio Masonary
	var $grid = $('.grid-active').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: 1
		}
	});
	// Portfolio Filter items on button click
	$('.grid-filter').on('click', 'li', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({
			filter: filterValue
		});
	});

	// change is-checked class on buttons
	$('.grid-filter').each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', 'li', function () {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
		});
	});
	
	// Project Single Slider 
	$('.project-slider').owlCarousel({
		loop: true,
		autoPlay: true,
		margin: 10,
		items: 1,
		dots: false,
		nav: true,
		navContainerClass: ['bottom-nav'],
		navClass: ['bl-prev','bl-next'],
		navText: ['<ion-icon name="arrow-back-outline"></ion-icon>', '<ion-icon name="arrow-forward-outline"></ion-icon>'],
		URLhashListener: true
	});
	
	$('.project-slider2').owlCarousel({
		loop: true,
		autoPlay: true,
		margin: 10,
		items: 4,
		dots: false,
		URLhashListener: true
	});

	var owl = $('.about-page-slider');
	$('.about-page-slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
		if (!e.namespace) {
			return;
		}
		var carousel = e.relatedTarget;
		$('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
	}).owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		margin: 10,
		autoHeight: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			960: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY > 0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});

})(jQuery);	

// Responsive Menu
document.addEventListener(
	"DOMContentLoaded", () => {
		const menu = new MmenuLight(
			document.querySelector("#menu"), "(max-width: 991px)"
		);

		const navigator = menu.navigation({
			selectedClass: 'Selected',
			slidingSubmenus: true,
			theme: 'dark',
			title: 'Menu'
		});
		const drawer = menu.offcanvas({
			position: 'left'
		});

		document.querySelector('a[href="#menu"]')
			.addEventListener('click', (evnt) => {
				evnt.preventDefault();
				drawer.open();
			});
	}
);

// Block Tabs
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function (el) {
	el.addEventListener("click", openTabs);
});


function openTabs(el) {
	var btnTarget = el.currentTarget;
	var country = btnTarget.dataset.country;

	tabContent.forEach(function (el) {
		el.classList.remove("active");
	});

	tabLinks.forEach(function (el) {
		el.classList.remove("active");
	});

	document.querySelector("#" + country).classList.add("active");

	btnTarget.classList.add("active");
}