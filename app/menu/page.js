'use client';

// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ChevronDownIcon } from '@/components/Proxy/proxy-library';

import HeroMenu from './_section/hero-menu/HeroMenu';
import { selectDrink } from '@/redux/slices/MenuSlice';

export const listVariants = {
	open: {
		height: 'auto',
	},
	close: {
		height: '0px',
	},
};

export default function Home() {
	const dispatch = useDispatch();
	const router = useRouter();

	const [drinksOpen, setDrinksOpen] = useState(false);
	const [eatOpen, setEatOpen] = useState(false);

	useEffect(() => {
		router.push(`?drink=${'tea'}`);
	}, []);

	const drinksHandler = (drink, eat) => {
		router.push(`?drink=${drink}&eat=${eat}`);
		// router.push(`?eat=${eat}`);
	};

	return (
		<main className='mb-52'>
			<section className='container pt-20'>
				<h1 className='heading-large border-b-[2px] border-mainBlack text-left'>
					MENU
				</h1>

				<div className='grid grid-cols-4'>
					<div className='grid grid-cols-4 justify-items-start gap-28'>
						<div className='grid w-[100px] grid-flow-row auto-rows-auto'>
							<button
								onClick={() => setDrinksOpen((prev) => !prev)}
								className='mt-10 flex items-start'
							>
								<p>DRINKS</p>
								<ChevronDownIcon
									className={`transition-settings ${
										drinksOpen ? 'rotate-180' : 'rotate-0'
									}`}
									boxSize={25}
								/>
							</button>
							<motion.ul
								className='overflow-hidden'
								initial='hidden'
								variants={listVariants}
								animate={drinksOpen ? 'open' : 'close'}
							>
								<motion.li>
									<button onClick={() => drinksHandler('tea', '')}>
										TEA
									</button>
								</motion.li>
								<motion.li>
									<button onClick={() => drinksHandler('coffee', '')}>
										COFFEE
									</button>
								</motion.li>
								<motion.li>
									<button onClick={() => drinksHandler('coctail', '')}>
										COCTAIL
									</button>
								</motion.li>
							</motion.ul>
						</div>
						{/* LIST DRINKS TYPE */}
						<div className='grid w-[100px] grid-flow-row auto-rows-auto'>
							<button
								onClick={() => setEatOpen((prev) => !prev)}
								className='mt-10 flex items-start'
							>
								<p>EAT</p>
								<ChevronDownIcon
									className={`transition-settings ${
										eatOpen ? 'rotate-180' : 'rotate-0'
									}`}
									boxSize={25}
								/>
							</button>
							<motion.ul
								className='overflow-hidden'
								initial='hidden'
								variants={listVariants}
								animate={eatOpen ? 'open' : 'close'}
							>
								<motion.li>
									<button
										onClick={() => drinksHandler('', 'sandwiches')}
									>
										Sandwiches
									</button>
								</motion.li>
								<motion.li>
									<button
										onClick={() => drinksHandler('', 'pastries')}
									>
										Pastries
									</button>
								</motion.li>
							</motion.ul>
						</div>
						{/* LIST EAT TYPE */}
					</div>
				</div>
				<HeroMenu filter={'coffee'} />
			</section>
		</main>
	);
}
