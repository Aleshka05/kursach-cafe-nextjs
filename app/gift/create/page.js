'use client';

import CardBody from './card-body/CardBody';

// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js

export default function Home() {
	return (
		<main className='mb-52'>
			<CardBody />
		</main>
	);
}
