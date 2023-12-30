import React, { createRef } from 'react' // Добавляем createRef из React
import Post from '../Post'

const MyPosts = props => {
	let postElements = props.posts.map(p => (
		<Post key={p.id} message={p.message} likesCount={p.likesCount} />
	))

	let newPostElement = createRef()

	let addPost = () => {
		let text = newPostElement.current.value
		props.addPost(text)
	}

	const onPostChange = () => {
		let text = newPostElement.current.value
		console.log(text)
	}

	return (
		<div>
			<div>My posts</div>
			<div className='pb-5'>
				<label
					htmlFor='default-input'
					className='block text-blue-600 text-sm font-bold mb-5'
				/>
				<input
					className='border rounded-md border-blue-300'
					type='text'
					id='default-input'
					ref={newPostElement}
					value={props.newPostText}
					onChange={onPostChange}
				/>
				<button
					onClick={addPost}
					className=' bg-blue-200 text-black text-sm pt-2 pb-2 rounded-md pl-2 pr-2 ml-4 hover:bg-blue-300 transition duration-300 ease-in-out '
				>
					Add Post
				</button>
			</div>
			<div>{postElements}</div>
		</div>
	)
}

export default MyPosts
