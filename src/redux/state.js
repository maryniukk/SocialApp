let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
			{ id: 2, message: 'It is my first post!', likesCount: 11 },
			{ id: 3, message: 'Blabla', likesCount: 50 },
			{ id: 4, message: 'Lalalala', likesCount: 5 },
		],
	},

	dialogsPage: {
		messages: [
			{ id: 1, message: 'Hi!' },
			{ id: 2, message: 'How are you?' },
			{ id: 3, message: 'See you soon.' },
			{ id: 4, message: 'How is your day going?' },
		],

		dialogsData: [
			{ id: 1, name: 'Nikita' },
			{ id: 2, name: 'Taras' },
			{ id: 3, name: 'Kirill' },
			{ id: 4, name: 'Danya' },
		],
	},
}
export let addPost = postMessage => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0,
	}
	state.profilePage.posts.push(newPost)
}
export default state
