import React from 'react'
import NavbarImg from './NavbarImg'
const Navbar = () => {
	return (
		<div className='flex'>
			<nav className='text-xl pt-5'>
				<div className=''>
					<div className='pb-1'>
						<a>Profile</a>
					</div>
					<div className=' text-blue-500 text-3xl font-medium pb-1'>
						<a href='#!'>Messages</a>
					</div>
					<div className='pb-1'>
						<a href='#!'>News</a>
					</div>
					<div className='pb-1'>
						<a href='#!'>Music</a>
					</div>
					<div className='pb-2'>
						<a href='#!'>Settings</a>
					</div>
				</div>
			</nav>
			<NavbarImg />
		</div>
	)
}

export default Navbar
