import React from 'react'
const ProfileInfo = ({ message }) => {
	return (
		<div className=''>
			<div className='flex'>
				<div className='pl-5'>{message}</div>
			</div>
			<div className='content text-xl pl'>
				<div className=''>Ava + description</div>
			</div>
		</div>
	)
}

export default ProfileInfo
