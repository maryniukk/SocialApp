import React from 'react'

const Profile = () => {
	return (
		<div class='content text-xl'>
			<div>Ava + description</div>
			<div>My Posts</div>
			<div>
				<label
					for='default-input'
					class='block text-gray-700 text-sm font-bold mb-2'
				></label>
				<input
					class='border border-slate-500'
					type='text'
					id='default-input'
				></input>
				<button class='bg-green-300 text-black text-sm pt-2 pb-1 pl-2 pr-2 ml-3 hover:bg-green-400 transition duration-300 ease-in-out'>
					Add Post
				</button>
			</div>
		</div>
	)
}

export default Profile
