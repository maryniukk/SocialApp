import React from 'react'
import MyPosts from '../../MyPosts'

const Profile = ({ message }) => {
	return (
		<div>
			<div className='flex'>
				<div className='pl-2'>{message}</div>
			</div>
			<div className='content text-xl'>
				<div className='pt-2'>Ava + description</div>
			</div>

			<MyPosts />
		</div>
	)
}

export default Profile
