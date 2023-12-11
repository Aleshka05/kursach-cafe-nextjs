// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js
import Carusel from './_section/Carusel/Carusel';
import GiftHero from './_section/gift-hero/GiftHero';

export default function Home() {
	return (
		<main className='mb-52'>
			<GiftHero />
			<Carusel />
		</main>
	);
}
