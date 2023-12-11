import styles from './side.module.scss';

const SideContact = () => {
	return (
		<aside className={styles.side_wrapper}>
			<div className={styles.side}>
				<h2 className='text-2xl'>Contact us</h2>
			</div>
		</aside>
	);
};

export default SideContact;
