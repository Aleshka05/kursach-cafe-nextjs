import Link from 'next/link';
import React from 'react';

import styles from './link.module.scss';

const LinkButton = ({ children, href }) => {
	return (
		<Link
			href={`/${href}`}
			className={`transition-settings ${styles.link_button}`}
		>
			{children}
		</Link>
	);
};

export default LinkButton;
