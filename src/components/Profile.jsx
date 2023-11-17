import React from 'react'

const Profile = () => {
	return (
		<div class='content'>
			<div>Ava + description</div>
			<div>My Posts</div>
			<div>
				<label
					for='default-input'
					class='block text-gray-700 text-sm font-bold mb-2'
				>
					Default input
				</label>
				<input
					class='border border-slate-500'
					type='text'
					id='default-input'
				></input>
				<button class='bg-blue-600 text-white text-sm pt-1 pb-1 pl-1 pr-1 ml-3 hover:bg-blue-700 transition duration-300 ease-in-out'>
					Add Post
				</button>
			</div>
		</div>
	)
}

export default Profile
