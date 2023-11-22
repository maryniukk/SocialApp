import React from 'react'
import MyPosts from '../../MyPosts'

const Profile = ({ message }) => {
	return (
		<div>
			<div class='flex'>
				<div class='pl-2'>{message}</div>
			</div>
			<div class='content text-xl'>
				<div class='pt-2'>Ava + description</div>
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile
