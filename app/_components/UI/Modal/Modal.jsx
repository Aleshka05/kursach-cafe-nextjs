import { CloseIcon } from '@/components/Proxy/proxy-library';

import FormButton from '../FormButton/FormButton';
import InputBorderB from '../InputBorderB/InputBorderB';

const Modal = ({ active, setActive, nameModal }) => {
	return (
		active && (
			<div
				className='w-full overflow-hidden md:w-1/3'
				onClick={() => setActive(false)}
			>
				<div onClick={(e) => e.stopPropagation()}>
					<div className='flex justify-between'>
						<h3 className='mb-3 text-base font-semibold'>{nameModal}</h3>
						<button onClick={() => setActive(false)}>
							<CloseIcon />
						</button>
					</div>
					<form
						onSubmit={(e) => e.preventDefault()}
						className='flex flex-col gap-5'
					>
						<label className='flex flex-col gap-3'>
							Write your Email:
							<InputBorderB placeholder='your email' />
						</label>
						<div className='flex gap-3'>
							<FormButton className='bg-lightred text-lightwhite delay px-[26px] py-[4px] transition-all hover:-translate-y-1'>
								SEND
							</FormButton>
						</div>
					</form>
				</div>
			</div>
		)
	);
};

export default Modal;
