import React from 'react'
import Post from './components/Profile/Post'
const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<label
					for='default-input'
					class='block text-gray-700 text-sm font-bold mb-2'
				></label>
				<input
					class='border rounded-md border-slate-500'
					type='text'
					id='default-input'
				></input>
				<button class=' bg-blue-400 text-black text-sm pt-2 pb-1 rounded-md pl-2 pr-2 ml-3 hover:bg-blue-500 transition duration-300 ease-in-out'>
					Add Post
				</button>
			</div>
			<div>
				<Post message='Hi, how are you?' />
				<Post message='It is my first post?' />
			</div>
		</div>
	)
}
export default MyPosts
