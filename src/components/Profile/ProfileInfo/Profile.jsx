import React from 'react'
import { addPost } from '../../../redux/state'
import MyPosts from '../MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo'
const Profile = props => {
	return (
		<div className='pl-20'>
			<ProfileInfo />
			<MyPosts posts={props.posts} addPost={addPost} />
		</div>
	)
}

export default Profile
