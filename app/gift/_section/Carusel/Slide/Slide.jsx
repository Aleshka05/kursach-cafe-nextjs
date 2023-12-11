'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { selectGift } from '@/redux/slices/GiftSlice';

const Slide = ({ item, giftType }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(selectGift({ id: item.id, giftType }));
	};
	return (
		<Link href='/gift/create' onClick={handleClick}>
			<div className='py-5 transition-all duration-150 ease-in-out hover:-translate-y-3'>
				<div className='overflow-hidden rounded-lg '>
					<Image src={item.img} width={400} height={400} alt='gift' />
				</div>
			</div>
		</Link>
	);
};

export default Slide;
