import React from 'react'
import Post from '../Post'
const MyPosts = () => {
	let posts = [
		{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
		{ id: 2, message: 'It is my first post!', likesCount: 11 },
		{ id: 3, message: 'Blabla', likesCount: 50 },
		{ id: 4, message: 'Lalalala', likesCount: 5 },
	]
	let postElements = posts.map(p => (
		<Post key={[p.id]} message={p.message} likesCount={p.likesCount} />
	))

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
			<div>{postElements}</div>
		</div>
	)
}
export default MyPosts
