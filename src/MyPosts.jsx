import React from 'react'
import Post from './components/Profile/Post'
const MyPosts = () => {
	return (
		<div>
			<div>Ava + description</div>
			<div>My posts</div>
			<div>
				<label
					htmlFor='default-input'
					className='block text-gray-700 text-sm font-bold mb-2'
				></label>
				<input
					className='border rounded-md border-slate-500'
					type='text'
					id='default-input'
				></input>
				<button className=' bg-green-400 text-black text-sm pt-2 pb-2 rounded-md pl-2 pr-2 ml-4 hover:bg-green-500 transition duration-300 ease-in-out'>
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
