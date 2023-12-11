import Link from 'next/link';

const BodyWork = () => {
	return (
		<section className='container'>
			<div className='mt-10 grid grid-flow-row auto-rows-min place-items-center gap-10'>
				<div className='w-full md:w-2/3'>
					<h3 className='heading-medium'>Join Our Team</h3>
					<p className='mt-8'>
						Welcome to our world of flavor and hospitality! At Cosy, we
						take pride in creating a unique experience for our guests
						every day. Our success relies on our team members, and we are
						always on the lookout for talented and passionate individuals
						to strengthen our team.
					</p>
				</div>
				<div className='w-full md:w-2/3'>
					<h3 className='heading-medium'>Why Choose Cosy?</h3>
					<div className='grid grid-flow-row auto-rows-min gap-6'>
						<div className='mt-6'>
							<p className='font-bold'>Professional Development:</p>
							<p>
								We believe in investing in our employees. We provide
								training and opportunities for career growth to help you
								achieve your goals.
							</p>
						</div>
						<div>
							<p className='font-bold'>Teamwork:</p>
							<p>
								We value collaboration and support. Your role at Cosy
								will be an integral part of a successful team.
							</p>
						</div>
						<div>
							<p className='font-bold'>Creativity and Innovation:</p>
							<p>
								There is room for your ideas and culinary explorations.
								We encourage creativity and strive to delight our guests
								every day.
							</p>
						</div>
						<div>
							<p className='font-bold'>Positive Atmosphere:</p>
							<p>
								Cosy is not just a place to work; it's a place where you
								can grow, learn, and enjoy what you do.
							</p>
						</div>
					</div>
				</div>
				<div className='w-full md:w-2/3'>
					<h3 className='heading-medium'>Current Job Openings</h3>
					<Link href='rabota.by'>
						<p className='mt-4 font-bold underline hover:italic'>
							list of current job openings
						</p>
					</Link>
					<p className='mt-6'>
						If you are ready to join our team and share your skills and
						passion, we would love to hear from you. Submit your
						application today, and let's start creating unforgettable
						experiences for our guests together.
					</p>
				</div>
				<p className='mt-10 text-sm font-light'>
					Contact us: careers@cosy.com
				</p>
			</div>
		</section>
	);
};

export default BodyWork;
