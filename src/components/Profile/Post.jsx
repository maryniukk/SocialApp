import React from 'react'

const Post = ({ message }) => {
	return (
		<div className='content text-lg'>
			<div>
				<div className='flex'>
					<img
						src='https://i.pinimg.com/originals/ea/53/3e/ea533ecbfd904d9f49e404a2813daf93.png'
						alt=''
						width={30}
					/>
					<div className='pl-2'>{message}</div>
				</div>
			</div>
		</div>
	)
}

export default Post
