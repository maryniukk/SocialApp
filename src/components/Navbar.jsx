import React from 'react'

const Navbar = () => {
	return (
		<div class='flex'>
			<nav class='text-xl pt-5'>
				<div class=''>
					<div class=' text-pink-500 text-3xl font-medium'>Profile</div>
					<div class='pb-1'>Messages</div>
					<div class='pb-1'>News</div>
					<div class='pb-1'>Music</div>
					<div class='pb-2'>Settings</div>
				</div>
			</nav>
			<div class='flex pl-40 pt-5'>
				<img
					class='rounded-xl'
					src='https://i.pinimg.com/originals/b4/1c/3c/b41c3ca065b9eaa404d01b4676744ad7.png'
					width={500}
				/>
			</div>
		</div>
	)
}

export default Navbar
