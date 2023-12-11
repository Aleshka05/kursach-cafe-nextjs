import Image from 'next/image';
import Link from 'next/link';

import styles from './body.module.scss';

const BodyAbout = () => {
	return (
		<section className='container mt-10'>
			<div className='grid place-items-center'>
				<Image
					src='/about/about-secondary.jpg'
					height={1024}
					width={900}
					alt='about'
				/>
			</div>
			<div className='mt-10 grid place-items-center'>
				<div className={styles.description_box}>
					<h3 className='heading-medium'>Our Heritage</h3>
					<div className={styles.description_content}>
						<p>
							Our café's story began in the cozy kitchen of a house on
							Paris Street in the city center. It was here, in an
							atmosphere of warmth and comfort, that one of the founders
							realized the desire to create a special place where people
							could enjoy exceptional coffee and a friendly ambiance.
						</p>
						<p>
							From the first meticulously selected coffee beans to the
							first cup lovingly prepared, our story began right here, on
							Paris Street. It was a place where a simple idea of
							creating a cozy space turned into a lively café, becoming a
							home for coffee enthusiasts and those who appreciate a warm
							atmosphere.
						</p>
						<p>
							Our first café wasn’t just a coffee spot. It was a place
							where each cup became part of everyday joy, and every guest
							felt at home. Since opening the doors of this corner, we
							have aimed to share this warmth and flavor with everyone
							who visits. Paris Street remains the birthplace of our
							story, and we take pride in the opportunity to share this
							taste and coziness with the world.
						</p>
					</div>
				</div>
				<div className='mt-10'>
					<div className='grid place-items-center'>
						<Image
							src='/about/about-main.jpg'
							height={1024}
							width={900}
							alt='about'
						/>
					</div>
					<div className='grid place-items-center'>
						<div className={styles.description_box}>
							<div className={styles.description_content}>
								<p>
									From the very beginning of our work, we aimed to
									offer something more than just a cup of coffee. Our
									cafe was envisioned as a place where every guest
									could relax from the bustle, enjoy moments of
									solitude, or spend time with friends in a cozy
									setting.
								</p>
								<p>
									We take pride in the quality of our beverages,
									attention to detail in their preparation, and the
									careful selection of the finest coffee beans. Our
									team of baristas constantly refines their craft so
									that every cup leaving our cafe brings joy and
									satisfaction.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-10'>
						<div className='grid place-items-center'>
							<div className='grid place-items-center'>
								<Image
									src='/about/about-career.jpg'
									height={1024}
									width={900}
									alt='about'
								/>
							</div>
							<div className={styles.description_box}>
								<h3 className='heading-medium mt-8'>Our Careers</h3>
								<div className={styles.description_content}>
									<p>
										At Cosy Cafe, we aim to create not just a place
										for coffee but a cozy space where every guest
										feels at home. We value a passion for quality
										service and a love for creating a unique
										atmosphere.
									</p>
									<p>
										If you share our passion for coffee, enjoy
										interacting with people, and are ready to
										contribute to the team, we invite you to join us.
									</p>
									<Link href='/work'>
										<p className='mt-4 font-bold underline hover:italic'>
											About careers
										</p>
									</Link>
									<p>
										We value diversity and encourage all interested
										candidates to participate. Together, we can create
										a unique atmosphere and share taste and coziness
										with our guests.
									</p>
									<Link href='/contact'>
										<p className='mt-4 font-bold underline hover:italic'>
											Contact
										</p>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BodyAbout;
