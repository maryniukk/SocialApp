import React, { createRef } from 'react'
import Post from '../Post'
const MyPosts = props => {
	// Создаем переменную, которая находит все посты с пропсов,  мапит их id, message, likesCount
	let postElements = props.posts.map(p => (
		<Post key={[p.id]} message={p.message} likesCount={p.likesCount} />
	))
	// Далее создается ref, т.е ссылка на отдельную страницу
	let newPostElement = createRef()
	// Функция которая добавляет с про
	let addPost = () => {
		let text = newPostElement.current.value //Получаем значение что ввел user
		props.addPost(text) // Вызывывает эту функцию, с тем что ввел пользователь
	}
	// addPost извлекает текст из поля ввода и передает его

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
					ref={newPostElement}
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
