'use client';

import Image from 'next/image';
import { useSelector } from 'react-redux';

import LinkButton from '@/UI/LinkButton/LinkButton';

import styles from './menu.module.scss';

const Menu = () => {
	const coffee = useSelector((state) => state.menu.data.coffee);
	//console.log(coffee);

	return (
		<section className='container mt-44'>
			<h2 className='text-left'>Menu</h2>
			<div className={styles.section}>
				{coffee.types.map((type) => (
					<div key={type.name}>
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
				))}
				<div className='w-full md:col-span-2 md:w-1/3'>
					<LinkButton href='menu'>MENU</LinkButton>
				</div>
			</div>
		</section>
	);
};

export default Menu;
