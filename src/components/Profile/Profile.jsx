import React from 'react'
import MyPosts from '../../MyPosts'
const Profile = ({ message }) => {
	return (
		<div className='pl-14 pt-5'>
			<div className='flex'>
				<div className='pl-2'>{message}</div>
			</div>
			<div className='content text-xl pl'>
				<div className=''>Ava + description</div>
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile
