import Error from 'next/error';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from './card.module.scss';
import FormButton from '@/app/_components/UI/FormButton/FormButton';
import InputBorderB from '@/app/_components/UI/InputBorderB/InputBorderB';

const CardBody = () => {
	const gift = useSelector((state) => state.gift.selectedGift);

	if (!gift) {
		return <Error />;
	}

	return (
		<section className='container pt-20'>
			<div className={styles.wrapper}>
				<div>
					<h3 className='heading-medium'>Create Gift</h3>
					<div className='mt-5 overflow-hidden rounded-lg'>
						<Image src={gift.img} width={350} height={350} alt='gift' />
					</div>
				</div>
				<form className={styles.form_gift}>
					<div className={styles.amount}>
						<h4 className={styles.heading_border}>Gift amount</h4>
						<div className={styles.box_input}>
							<select
								name='amount'
								id='amount'
								className={styles.select_amount}
							>
								<option value='10'>10$</option>
								<option value='15'>15$</option>
								<option value='20'>20$</option>
								<option value='25'>25$</option>
								<option value='30'>30$</option>
							</select>
						</div>
					</div>
					<div>
						<h4 className={styles.heading_border}>
							Who are you gifting to?
						</h4>
						<div>
							<p className='mt-2 px-3'>Recipient Name:</p>
							<div className={styles.box_input}>
								<InputBorderB
									type='text'
									placeholder='Recipient Name'
								/>
							</div>
							<p className='mt-2 px-3'>Recipient Email:</p>
							<div className={styles.box_input}>
								<InputBorderB
									type='email'
									placeholder='Recipient Email'
								/>
							</div>
						</div>
					</div>
					<div>
						<h4 className={styles.heading_border}>Personal Note</h4>
						<div className={styles.box_input}>
							<textarea className={styles.input} placeholder='Message' />
						</div>
					</div>
					<div className='mt-10'>
						<h4 className={styles.heading_border}>From</h4>
						<div>
							<p className='mt-2 px-3'>Sender Name:</p>
							<div className={styles.box_input}>
								<InputBorderB type='text' placeholder='Sender Name' />
							</div>
							<p className='mt-2 px-3'>Sender Email:</p>
							<div className={styles.box_input}>
								<InputBorderB type='email' placeholder='Sender Email' />
							</div>
						</div>
					</div>
					<FormButton>CHECKOUT</FormButton>
				</form>
			</div>
		</section>
	);
};

export default CardBody;
