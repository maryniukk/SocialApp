import React from 'react'
import Post from '../Post'
const MyPosts = () => {
	let postData = [
		{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
		{ id: 2, message: 'It is my first post!', likesCount: 11 },
	]
	return (
		<div>
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
				<Post
					message={postData[0].message}
					likesCount={postData[0].likesCount}
				/>
				<Post
					message={postData[1].message}
					likesCount={postData[1].likesCount}
				/>
			</div>
		</div>
	)
}
export default MyPosts
