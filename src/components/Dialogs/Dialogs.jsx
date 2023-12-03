import React from 'react'
import { NavLink } from 'react-router-dom'

const DialogItem = props => {
	let path = '/Dialogs/' + props.id
	return (
		<div key={props.id}>
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
	return (
		<div className='text-xl pb-1' key={props.id}>
			{props.message}
		</div>
	)
}

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

let dialogsElements = dialogsData.map(d => (
	<DialogItem key={d.id} name={d.name} id={d.id} />
))
let messagesElements = messages.map(m => (
	<Message key={m.id} id={m.id} message={m.message} />
))

const Dialogs = () => {
	return (
		<div className='flex pl-20 pt-5'>
			<div>{dialogsElements}</div>
			<div>
				<div className='pl-20'>{messagesElements}</div>
			</div>
		</div>
	)
}

export default Dialogs
