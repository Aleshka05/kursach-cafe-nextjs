/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			md: '809px',
			lg: '1199px',
			xl: '1200px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '8px',
				lg: '20px',
			},
		},
		fontFamily: {
			main: 'var(--main-font)',
			text: 'var(--text-font)',
		},
		extend: {
			colors: {
				mainBlack: '#212121',
				mainBrown: '#433633',
				mainWhite: '#F7F0F5',
				mainOrange: '#FC891C',
				mainGray: '#444444',
				secondaryBrown: '#DECBB7',
				textGray: '#535353',
				lightWhite: '#e8e8e8',
				lightBrown: '#5C5552',
			},
		},
	},
	plugins: [],
};
