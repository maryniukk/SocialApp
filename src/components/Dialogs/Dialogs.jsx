import React from 'react'
import { NavLink } from 'react-router-dom'

const DialogItem = props => {
	let path = '/Dialogs/' + props.id
	return (
		<div key={props.id} className='pb-5'>
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
		<div className='text-xl pb-5' key={props.id}>
			{props.message}
		</div>
	)
}

const Dialogs = ({ dialogsData, messages }) => {
	let dialogsElements = dialogsData.map(d => (
		<DialogItem key={d.id} name={d.name} id={d.id} />
	))
	let messagesElements = messages.map(m => (
		<Message key={m.id} id={m.id} message={m.message} />
	))

	// Возвращаем разметку, используя сгенерированные элементы
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
