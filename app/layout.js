import { Elsie, Martian_Mono } from 'next/font/google';

import Providers from '@/components/Provider/Providers';

import Footer from './_footer/Footer';
import Header from './_header/Header';
import './globals.css';

const elsie = Elsie({
	subsets: ['latin'],
	variable: '--main-font',
	weight: '400',
});

const martian_mono = Martian_Mono({
	subsets: ['latin'],
	variable: '--text-font',
});

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${elsie.className} ${elsie.variable} ${martian_mono.className} ${martian_mono.variable} bg-secondaryBrown`}
			>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
