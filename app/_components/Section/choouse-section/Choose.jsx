import Image from 'next/image';

import styles from './choose.module.scss';

const Choose = () => {
	return (
		<section className='container mt-52'>
			<h2 className='heading-medium text-lightBrown'>
				Why Coffee Lovers Choose Us
			</h2>
			<div className={styles.content}>
				<div className={styles.content_image_container}>
					<Image
						src='/home/people.jpg'
						width={960}
						height={1700}
						alt='people'
						className='h-full w-full bg-cover object-cover'
					/>
				</div>
				<div className=''>
					<h3 className={styles.content_title}>Exceptional Quality</h3>
					<p className={styles.content_subtitle}>
						Our fine coffee beans are handpicked and freshly roasted to
						bring out the best flavors.
					</p>
				</div>
				<div className=''>
					<h3 className={styles.content_title}>Welcoming Ambiance</h3>
					<p className={styles.content_subtitle}>
						Feel right at home in our warm, inviting, and
						creatively-designed space.
					</p>
				</div>
				<div className=''>
					<h3 className={styles.content_title}>Inspiring Events</h3>
					<p className={styles.content_subtitle}>
						We host tastings, coffee classes, and various artistic
						gatherings that celebrate our coffee culture.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Choose;
