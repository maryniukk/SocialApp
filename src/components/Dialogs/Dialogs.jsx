import React from 'react'
import { NavLink } from 'react-router-dom'

const DialogItem = props => {
	let path = '/Dialogs/' + props.id
	return (
		<div>
			<NavLink
				className='text-xl hover:text-green-500 transition-all'
				to={path}
			>
				{props.name}
			</NavLink>
		</div>
	)
}

const Message = props => {
	return <div className='text-xl pb-1'>{props.message}</div>
}

let dialogsData = [
	{ id: 1, name: 'Nikita' },
	{ id: 2, name: 'Taras' },
	{ id: 3, name: 'Kirill' },
	{ id: 4, name: 'Danya' },
]
let messagesData = [
	{ id: 1, message: 'Hi!' },
	{ id: 2, message: 'How are you?' },
	{ id: 3, message: 'See you soon.' },
	{ id: 4, message: 'How is your day going?' },
]

const Dialogs = () => {
	return (
		<div className='flex pl-20 pt-5'>
			<div>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
			</div>
			<div>
				<div className='pl-20'>
					<Message message={messagesData[0].message} />
					<Message message={messagesData[1].message} />
					<Message message={messagesData[2].message} />
					<Message message={messagesData[3].message} />
				</div>
			</div>
		</div>
	)
}

export default Dialogs
