import Image from 'next/image';

import Choose from './_components/Section/choouse-section/Choose';
import HeroSection from './_components/Section/hero-section/HeroSection';
import Join from './_components/Section/join-section/Join';
import Menu from './_components/Section/menu-section/Menu';
import Welcome from './_components/Section/welcome-section/Welcome';

// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js

export default function Home() {
	return (
		<main className='mb-52'>
			<HeroSection />
			<Welcome />
			<Menu />
			<Choose />
			<Join />
		</main>
	);
}
