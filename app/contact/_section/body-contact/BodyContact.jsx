import styles from './body.module.scss';
import { contactData } from './contactData';

const BodyContact = () => {
	return (
		<section className='bg-mainBrown/10 md:col-span-2 md:col-start-3 '>
			<div className='grid px-20 py-10 md:py-32'>
				<div className='place-self-center'>
					<h2 className='heading-large'>Contact Us</h2>
				</div>
				{contactData.map((item, idx) => (
					<div className={styles.items}>
						<h3 className='heading-medium'>{item.title}</h3>
						<div className={styles.box}>
							<p>
								{item.description}{' '}
								<span className='underline'>{item.email}</span>.
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default BodyContact;
