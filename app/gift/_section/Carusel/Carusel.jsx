'use client';

import { useSelector } from 'react-redux';

import GiftCarusel from './GiftCarusel';

const Carusel = () => {
	const celebrate = useSelector((state) => state.gift.data.celebrate);
	const christmas = useSelector((state) => state.gift.data.christmas);
	const halloween = useSelector((state) => state.gift.data.halloween);

	return (
		<section className='container'>
			<div className='mt-10'>
				<h5 className='heading-medium'>Celebrate</h5>
				<GiftCarusel data={celebrate} id={1} giftType='Celebrate' />
			</div>
			<div className='mt-10'>
				<h5 className='heading-medium'>Christmas</h5>
				<GiftCarusel data={christmas} id={2} giftType='Christmas' />
			</div>
			<div className='mt-10'>
				<h5 className='heading-medium'>Halloween</h5>
				<GiftCarusel data={halloween} id={3} giftType='Halloween' />
			</div>
		</section>
	);
};

export default Carusel;
