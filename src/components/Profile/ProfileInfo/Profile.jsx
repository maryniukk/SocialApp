import React from 'react'
import MyPosts from '../MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo'
const Profile = () => {
	let posts = [
		{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
		{ id: 2, message: 'It is my first post!', likesCount: 11 },
		{ id: 3, message: 'Blabla', likesCount: 50 },
		{ id: 4, message: 'Lalalala', likesCount: 5 },
	]
	return (
		<div className='pl-20'>
			<ProfileInfo />
			<MyPosts posts={posts} />
		</div>
	)
}

export default Profile
