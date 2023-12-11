'use client';

import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@/components/Proxy/proxy-library';

import Slide from './Slide/Slide';
import styles from './slide.module.scss';

const GiftCarusel = ({ data, id, giftType }) => {
	return (
		<div className={styles.wrapper}>
			<Swiper
				style={{ '--swiper-pagination-color': '#FF7236' }}
				loop={true}
				modules={[FreeMode, Navigation]}
				speed={700}
				slidesPerView='auto'
				direction='horizontal'
				spaceBetween={30}
				navigation={{
					nextEl: `#next-slide${id}`,
					prevEl: `#prev-slide${id}`,
				}}
				breakpoints={{
					320: { slidesPerView: 1 },
					500: { slidesPerView: 1.2 },
					575: { slidesPerView: 1.5 },
					768: { slidesPerView: 3 },
				}}
			>
				{data.map((item) => (
					<SwiperSlide key={item.id}>
						<Slide item={item} giftType={giftType} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className={styles.navigation}>
				<button className='transition-settings' id={`prev-slide${id}`}>
					<ChevronLeftIcon boxSize={45} color='white' />
				</button>
				<button className='transition-settings' id={`next-slide${id}`}>
					<ChevronRightIcon boxSize={45} color='white' />
				</button>
			</div>
		</div>
	);
};

export default GiftCarusel;
