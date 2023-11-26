import React from 'react'
import { NavLink } from 'react-router-dom'

const Dialogs = () => {
	return (
		<div className='grid grid-cols-6 pl-20 pt-5'>
			<div className=''>
				<div className='text-xl pb-1 text-blue-400'>
					<NavLink to='/dialogs/1' />
					Nikita
				</div>
				<div className='text-xl pb-1'>
					<NavLink to='/dialogs/2' />
					Taras
				</div>
				<div className='text-xl pb-1'>
					<NavLink to='/dialogs/3' />
					Kirill
				</div>
				<div className='text-xl pb-1'>
					<NavLink to='/dialogs/4' />
					Danya
				</div>
			</div>
			<div className=''>
				<div className='text-xl pb-1'>Hi!</div>
				<div className='text-xl pb-1'>How are you?</div>
				<div className='text-xl pb-1'>See you soon.</div>
				<div className='text-xl pb-1'>How is your day going?</div>
			</div>
		</div>
	)
}

export default Dialogs
