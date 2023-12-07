import React from 'react'
import Post from '../Post'
const MyPosts = props => {
	let postElements = props.posts.map(p => (
		<Post key={[p.id]} message={p.message} likesCount={p.likesCount} />
	))

	let addPost = () => {
		alert('You have successfully added a post!')
	}

	return (
		<div>
			<div>My posts</div>
			<div className='pb-5'>
				<label
					htmlFor='default-input'
					className='block text-gray-700 text-sm font-bold mb-2'
				></label>
				<input
					className='border rounded-md border-slate-500'
					type='text'
					id='default-input'
				></input>
				<button
					onClick={addPost}
					className=' bg-gray-400 text-black text-sm pt-2 pb-2 rounded-md pl-2 pr-2 ml-4 hover:bg-gray-500 transition duration-300 ease-in-out '
				>
					Add Post
				</button>
			</div>
			<div>{postElements}</div>
		</div>
	)
}
export default MyPosts
