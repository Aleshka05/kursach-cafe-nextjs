import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className=''>
			<div className={styles.content}>
				<div>
					<h3 className={styles.content_heading}>Location</h3>
					<ul className={styles.content_list}>
						<li>
							<Link href='https://yandex.by/maps/-/CDeHZS7w'>Paris</Link>
						</li>
						<li>
							<Link href='https://yandex.by/maps/-/CDeHZWIS'>
								London
							</Link>
						</li>
						<li>
							<Link href='https://yandex.by/maps/-/CDeHZW7g'>
								Manchester
							</Link>
						</li>
						<li>
							<Link href='https://yandex.by/maps/-/CCUbIJA5xD '>
								Minsk
							</Link>
						</li>
						<li>
							<Link href='https://yandex.by/maps/-/CCUZEQg58B'>
								Moscow
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className={styles.content_heading}>Menu</h3>
					<ul className={styles.content_list}>
						<li>
							<Link href='/menu?drink=coffee'>Coffee</Link>
						</li>
						<li>
							<Link href='/menu?drink=tea'>Tea</Link>
						</li>
						<li>
							<Link href='/menu?drink=&eat=sandwiches'>Sandwiches</Link>
						</li>
					</ul>
				</div>
				<div className='md:col-start-3'>
					<h3 className={styles.content_heading}>About</h3>
					<ul className={styles.content_list}>
						<li>
							<Link href='/about'>About us</Link>
						</li>
						<li>
							<Link href='/gift'>Gift cards</Link>
						</li>

						<li>
							<Link href='/work'>Careers</Link>
						</li>
						<li>
							<Link href='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='container mt-10 grid grid-cols-2 md:grid-cols-6'>
				<ul className='grid grid-flow-col'>
					<li>
						<Link href='/'>
							<Image
								src='/icons/instagram.png'
								width={30}
								height={30}
								alt='instagram'
							/>
						</Link>
					</li>
					<li>
						<Link href='/'>
							<Image
								src='/icons/pinterest.png'
								width={30}
								height={30}
								alt='pinterest'
							/>
						</Link>
					</li>
					<li>
						<Link href='/'>
							<Image
								src='/icons/twitter.png'
								width={30}
								height={30}
								alt='twitter'
							/>
						</Link>
					</li>
				</ul>
			</div>
			<div className='mt-10 border-t border-mainBlack py-10'>
				<div className='container select-none'>
					<p>© Cosy Coffee Place - The Best in Town</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
