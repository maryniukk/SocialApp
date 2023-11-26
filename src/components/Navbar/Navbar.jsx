import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
const Navbar = () => {
	const location = useLocation()

	const isActive = path => {
		return location.pathname === path ? 'text-blue-500 text-2xl' : ''
	}

	return (
		<div className='flex'>
			<nav className='text-xl pt-5'>
				<div className='flex'>
					<div>
						<div className='pb-1 hover:text-blue-300 transition-all'>
							<NavLink to='/Profile' className={isActive('/Profile')}>
								Profile
							</NavLink>
						</div>
						<div className='pb-1  hover:text-blue-300 transition-all'>
							<NavLink to='/Dialogs' className={isActive('/Dialogs')}>
								Messages
							</NavLink>
						</div>
						{/* Другие NavLink'и */}
					</div>
					<div className='flex'></div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
