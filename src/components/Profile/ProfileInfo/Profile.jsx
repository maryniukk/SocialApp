import React from 'react'
import MyPosts from '../MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo'
const Profile = ({ message }) => {
	return (
		<div className='pl-20'>
			<ProfileInfo />
			<MyPosts />
		</div>
	)
}

export default Profile
