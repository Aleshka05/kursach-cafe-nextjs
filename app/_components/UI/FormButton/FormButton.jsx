import styles from './button.module.scss';

const FormButton = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={`transition-settings ${styles.form_button}`}
		>
			{children}
		</button>
	);
};

export default FormButton;
