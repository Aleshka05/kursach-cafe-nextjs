// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js
import BodyAbout from './_section/body-about/BodyAbout';
import HeroAbout from './_section/hero-about/HeroAbout';

export default function Home() {
	return (
		<main className='mb-52'>
			<HeroAbout />
			<BodyAbout />
		</main>
	);
}
