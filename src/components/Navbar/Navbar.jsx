import React from 'react'
import NavbarImg from './NavbarImg'
const Navbar = () => {
	return (
		<div class='flex'>
			<nav class='text-xl pt-5'>
				<div class=''>
					<div class='pb-1'>
						<a>Profile</a>
					</div>
					<div class=' text-blue-500 text-3xl font-medium pb-1'>
						<a href='#!'>Messages</a>
					</div>
					<div class='pb-1'>
						<a href='#!'>News</a>
					</div>
					<div class='pb-1'>
						<a href='#!'>Music</a>
					</div>
					<div class='pb-2'>
						<a href='#!'>Settings</a>
					</div>
				</div>
			</nav>
			<NavbarImg />
		</div>
	)
}

export default Navbar
