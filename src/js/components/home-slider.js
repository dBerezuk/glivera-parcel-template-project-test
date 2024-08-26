import Swiper from 'swiper';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';
import { BREAKPOINTS } from '../utils/constants';

export const homeSlider = () => {
	const swiper = new Swiper('.slider__box', {
		modules: [Pagination, Navigation, Grid],

		slidesPerView: 1,
		grid: {
			rows: 4,
			fill: 'row',
		},
		spaceBetween: 30,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		navigation: {
			nextEl: '.slider-arrow--next',
			prevEl: '.slider-arrow--prev',
		},

		breakpoints: {
			[BREAKPOINTS.mediaPoint1]: {
				spaceBetween: 80,
				grid: {
					rows: 1,
					fill: 'row',
				},
				slidesPerView: 3,
			},
			[BREAKPOINTS.mediaPoint2]: {
				spaceBetween: 30,
				slidesPerView: 3,
				grid: {
					rows: 1,
					fill: 'row',
				},
			},
			[BREAKPOINTS.mediaPoint3]: {
				spaceBetween: 20,
				slidesPerView: 2,
				grid: {
					rows: 1,
					fill: 'row',
				},
			},
		},
	});
};
