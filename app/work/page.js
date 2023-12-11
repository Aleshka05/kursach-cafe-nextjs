// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js
import BodyWork from './_section/body-work/BodyWork';
import HeroWork from './_section/hero-work/HeroWork';

export default function Home() {
	return (
		<main className='mb-52'>
			<HeroWork />
			<BodyWork />
		</main>
	);
}
