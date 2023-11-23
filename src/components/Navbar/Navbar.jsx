import React from 'react'
import { NavLink } from 'react-router-dom'
import NavbarImg from './NavbarImg'
const Navbar = () => {
	return (
		<div className='flex'>
			<nav className='text-xl pt-5 '>
				<div className='flex'>
					<div>
						<div className='pb-1'>
							<NavLink to='/Profile'>Profile</NavLink>
						</div>
						<div className=' text-blue-500 text-3xl font-medium pb-1'>
							<NavLink to='/Dialogs'>Messages</NavLink>
						</div>
						<div className='pb-1'>
							<NavLink to='#!'>News</NavLink>
						</div>
						<div className='pb-1'>
							<NavLink to='#!'>Music</NavLink>
						</div>
						<div className='pb-2'>
							<NavLink to='#!'>Settings</NavLink>
						</div>
					</div>
					<div className='flex'>
						<NavbarImg />
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
