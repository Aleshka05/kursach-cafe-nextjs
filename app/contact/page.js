// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js
import BodyContact from './_section/body-contact/BodyContact';
import SideContact from './_section/side-contact/SideContact';

export default function Home() {
	return (
		<main>
			<div className='mb-10 grid grid-flow-row border-b border-mainBrown pt-20 md:grid-cols-4 md:pt-0'>
				<SideContact />
				<BodyContact />
			</div>
		</main>
	);
}
