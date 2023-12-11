import { navData } from './Header';

export const burgerVariant = {
	hidden: {
		transform: 'translateY(-100%)',
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 0.37,
			delay: 0.47,
			stiffness: 47,
		},
	},
	visible: {
		transform: 'translateY(-5%)',
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 0.3,
			delay: 0.2,
			stiffness: 47,
		},
	},
	exit: {
		transform: 'translateY(-100%)',
		opacity: 0,
	},
};

export const listVariant = {
	hidden: (custom) => ({
		transform: 'translateX(-27%)',
		opacity: 0,
		transition: {
			type: 'spring',
			stiffness: 47,
			duration: 0.2,
			delay: custom * 0.1,
		},
	}),
	visible: (custom) => ({
		transform: 'translateX(0%)',
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 47,
			duration: 0.2,
			delay: custom * 0.1,
		},
	}),
	exit: (custom) => ({
		transform: 'translateX(10%)',

		opacity: 0,
		transition: {
			type: 'spring',
			stiffness: 107,
			duration: 0.1,
			delay: (navData.length - custom - 1) * 0.07, //Переворачиваем порядок исчезновения элементов
		},
	}),
};
