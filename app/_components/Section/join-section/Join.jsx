'use client';

import { useState } from 'react';

import FormButton from '@/UI/FormButton/FormButton';
import Modal from '@/UI/Modal/Modal';

const Join = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<section className='container mt-52'>
			<div className='grid grid-flow-row auto-rows-min place-items-center gap-5'>
				<h3 className='heading-medium'>Join Today</h3>
				<p className='max-w-[500px] text-center leading-7'>
					Be the first to know about exclusive promotions, new menu items,
					and events. Don’t miss out on the wildest coffee experience
					you'll ever have!
				</p>
				<div className='w-full uppercase md:w-1/3'>
					<FormButton onClick={() => setIsActive((prev) => !prev)}>
						Subscribe now
					</FormButton>
				</div>
				<Modal
					active={isActive}
					setActive={setIsActive}
					nameModal='Email'
				/>
			</div>
		</section>
	);
};

export default Join;
