import React from 'react'
import { NavLink } from 'react-router-dom'

let dialogsData = [
	{ id: 1, name: 'Nikita' },
	{ id: 2, name: 'Taras' },
	{ id: 3, name: 'Kirill' },
	{ id: 4, name: 'Danya' },
]
let messages = [
	{ id: 1, message: 'Hi!' },
	{ id: 2, message: 'How are you?' },
	{ id: 3, message: 'See you soon.' },
	{ id: 4, message: 'How is your day going?' },
]

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

let dialogsElements = dialogsData.map(dialogs => (
	<DialogItem name={d.name} id={d.id} />
))
let messagesElements = messages.map(m => <Message message={m.message} />)

const Dialogs = () => {
	return (
		<div className='flex pl-20 pt-5'>
			<div>{dialogsElements}</div>
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
