import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
const Navbar = () => {
	const location = useLocation()
	const isActive = path => {
		return location.pathname === path ? 'text-gray-400 text-2xl' : ''
	}
	return (
		<div className='flex'>
			<nav className='text-xl pt-5'>
				<div className='flex'>
					<div>
						<div className='pb-2 hover:text-gray-700 transition-all'>
							<NavLink to='/Profile' className={isActive('/Profile')}>
								Profile123
							</NavLink>
						</div>
						<div className='pb-2  hover:text-gray-700 transition-all'>
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
