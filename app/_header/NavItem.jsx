import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const NavItem = ({ link }) => {
	return (
		<Link
			className='transition-settings opacity-50 hover:font-bold hover:opacity-100'
			href={`/${link.path}`}
		>
			{link.name}
		</Link>
	);
};

export default NavItem;
