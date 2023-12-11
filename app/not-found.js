import LinkButton from './_components/UI/LinkButton/LinkButton';

export default function NotFound() {
	return (
		<section className='container mb-52 grid h-screen pt-20'>
			<div className='w-full place-self-center '>
				<p className='text-center text-lg'>404</p>
				<div className='border-b-2 border-y-mainBlack'>
					<h2 className='heading-large text-center'>PAGE NOT FOUND</h2>
				</div>
				<div className='mx-auto mt-10 w-full md:w-1/5'>
					<LinkButton href='/'>HOME</LinkButton>
				</div>
			</div>
		</section>
	);
}
