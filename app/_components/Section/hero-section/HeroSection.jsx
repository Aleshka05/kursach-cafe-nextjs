'use client';

import { motion } from 'framer-motion';

import styles from './hero.module.scss';

const translate = {
	initial: {
		y: '100%',
		opacity: 0,
	},

	enter: (i) => ({
		y: 0,

		opacity: 1,

		transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
	}),

	exit: (i) => ({
		y: '100%',
		opacity: 0,
		transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
	}),
};

const HeroSection = () => {
	const getChars = (word, idx) => {
		let chars = [];

		word.split('').forEach((char, i) => {
			chars.push(
				<motion.span
					custom={[i * idx * 0.02, (word.length - i) * idx * 0.01]}
					viewport={{ amount: 0.2, once: true }}
					variants={translate}
					initial='initial'
					whileInView='enter'
					exit='exit'
					key={char + i}
				>
					{char}
				</motion.span>,
			);
		});

		return chars;
	};

	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			className='container pt-52'
		>
			<div className={styles.hero_section}>
				<div className='relative'>
					<motion.div className={styles.fill_circle} />
					<motion.div
						initial={{ left: 0, top: 0, opacity: 0 }}
						viewport={{ amount: 0.2, once: true }}
						whileInView={{
							left: -27,
							top: -20,
							opacity: 1,
							transition: {
								type: 'spring',
								duration: 0.37,
								delay: 0.47,
								stiffness: 47,
							},
						}}
						className={styles.rounded_circle}
					/>
				</div>
				<h1 className='heading-large mt-10'>{getChars('Cosy Cafe', 1)}</h1>
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					viewport={{ amount: 0.2, once: true }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: {
							type: 'spring',
							duration: 0.37,
							delay: 0.47,
							stiffness: 47,
						},
					}}
					className={`heading-large mt-2 overflow-hidden ${styles.hero_second_title}`}
				>
					{getChars('Perfection Served', 4)}
				</motion.h1>
			</div>
		</motion.section>
	);
};

export default HeroSection;
