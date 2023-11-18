import React from 'react'

const Profile = () => {
	return (
		<div class='content text-xl'>
			<div class='pt-1'>Ava + description</div>
			<div class='pt-1'>My Posts</div>
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
				<button class=' bg-pink-400 text-black text-sm pt-2 pb-1 rounded-md pl-2 pr-2 ml-3 hover:bg-pink-500 transition duration-300 ease-in-out'>
					Add Post
				</button>
			</div>
		</div>
	)
}

export default Profile
