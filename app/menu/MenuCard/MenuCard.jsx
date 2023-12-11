import Image from 'next/image';
import React from 'react';

import styles from '@/components/Section/menu-section/menu.module.scss';

import LinkButton from '@/UI/LinkButton/LinkButton';

const MenuCard = ({ type }) => {
	return (
		<div>
			<div className={styles.img_container}>
				<Image
					src={type.img}
					width={1000}
					height={1400}
					alt='coffee'
					className='h-full w-full bg-cover object-cover'
				/>
			</div>
			<h3 className={styles.card_title}>
				{type.name}

				<span className='text-xl'>{type.price}$</span>
			</h3>

			{/* <LinkButton>BUY</LinkButton> */}
		</div>
	);
};

export default MenuCard;
