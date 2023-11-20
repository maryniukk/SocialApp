import React from 'react'
import NavbarImg from './NavbarImg'
const Navbar = () => {
	return (
		<div class='flex'>
			<nav class='text-xl pt-5'>
				<div class=''>
					<div class='pb-1'>Profile</div>
					<div class=' text-blue-500 text-3xl font-medium pb-1'>Messages</div>
					<div class='pb-1'>News</div>
					<div class='pb-1'>Music</div>
					<div class='pb-2'>Settings</div>
				</div>
			</nav>
			<NavbarImg />
		</div>
	)
}

export default Navbar
