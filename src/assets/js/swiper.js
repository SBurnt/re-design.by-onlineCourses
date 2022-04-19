/* eslint-disable no-unused-vars */
import Swiper from '../../../node_modules/swiper/swiper-bundle';

const sliderActivity = document.querySelector('.js-slider-activity-init');
const sliderTimetable = document.querySelector('.js-slider-timetable-init');
const slidergalleryThumbs = document.querySelector('.js-slider-gallery-thumbs-init');
const slidergallery = document.querySelector('.js-slider-gallery-init');

if (sliderActivity) {
	const swiper = new Swiper(sliderActivity, {
		slidesPerView: 'auto',
		freeMode: true,
		freeModeSticky: true,
		grabCursor: true,
		freeModeMomentumRatio: 0.2,
		speed: 1000,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
	});
}

if (sliderTimetable) {
	const swiper = new Swiper(sliderTimetable, {
		slidesPerView: 1.4,
		spaceBetween: 15,
		freeModeSticky: true,
		grabCursor: true,
		pauseOnMouseEnter: true,
		speed: 800,
		autoplay: {
			delay: 4000,
			disableOnInteraction: true,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			// when window width is >= 375px
			360: {
				slidesPerView: 1.5,
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 2.2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2.4,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 3.3,
				spaceBetween: 15,
			},
			1260: {
				allowTouchMove: false,
				grabCursor: false,
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1490: {
				allowTouchMove: false,
				grabCursor: false,
				slidesPerView: 4,
				spaceBetween: 30,
			},
			1920: {
				allowTouchMove: false,
				grabCursor: false,
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
	});
}

if (slidergalleryThumbs) {
	const swiperThumbs = new Swiper(slidergalleryThumbs, {
		// allowTouchMove: false,
		spaceBetween: 0,
		slidesPerView: 'auto',
		touchRatio: 0.4,
		centeredSlides: true,
		slideToClickedSlide: true,
		breakpoints: {
			// when window width is >= 375px
			768: {
				slidesPerView: 2.8,
				centeredSlidesBounds: true,
			},
			1024: {
				slidesPerView: 3.5,
				centeredSlidesBounds: true,
			},
			1280: {
				slidesPerView: 4,
				centeredSlidesBounds: true,
				allowTouchMove: false,
				centerInsufficientSlides: true,
			},
		},
	});

	const swiperPhoto = new Swiper(slidergallery, {
		preloadImages: false,
		lazy: true,
		allowTouchMove: false,
		spaceBetween: 0,
		slidesPerView: 1,
		autoHeight: true,
		effect: 'fade',
		speed: 150,
		fadeEffect: {
			crossFade: true,
		},
		thumbs: {
			swiper: swiperThumbs,
		},
	});
}
