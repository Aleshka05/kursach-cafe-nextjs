import React from 'react';

import styles from './input.module.scss';

const InputBorderB = ({ type, placeholder, ...props }) => {
	return (
		<input
			{...props}
			type={type}
			className={styles.input}
			required={true}
			placeholder={placeholder}
		/>
	);
};

export default InputBorderB;
